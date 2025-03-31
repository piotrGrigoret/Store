import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}
export interface FilterParam {
    searchObj: string,
    category: string,
    sort: string
}
interface ProductsState {
    products: Product[];
    cart: Product[]; 
    filteredProduct:Product[];
    filterParam:FilterParam;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: ProductsState = {
    products: [],
    filteredProduct:[],
    filterParam: {
        searchObj: "",
        category: "",
        sort: ""
    },
    cart:[],
    loading: 'idle',
    error: ''
}

// use Vercel fot proxy images you can dont use it if in your region this source is working 
const proxyImage = (imageUrl: string) => {
    const encodedUrl = encodeURIComponent(imageUrl)
    return `https://product-proxy.vercel.app/api/image?url=${encodedUrl}`
    // return `http://localhost:3000/api/image?url=${encodedUrl}`
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            // i use vercel for skip cors block in my region , u can use just https://fakestoreapi.com/products or other methods

            // const response = await fetch("https://fakestoreapi.com/products");

            const response = await fetch("https://product-proxy.vercel.app/api/products");
            // const response = await fetch("http://localhost:3000/api/products");
            
            if (!response.ok) throw new Error("error");

            const products = await response.json()

            return products.map((product: Product) => ({
              ...product,
              image: proxyImage(product.image),
            }))
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "unknown error";
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
        setsearchedParameters: (state, action: PayloadAction<FilterParam>) => {
            const searchTerm = action.payload.searchObj;
            state.filterParam.searchObj = action.payload.searchObj;
            if(state.filterParam.category.length > 0){
                state.filteredProduct = state.products.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm) 
                    && product.category.toLowerCase() ===  state.filterParam.category.toLowerCase()
                );
                
            }else{
                state.filteredProduct = state.products.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm) 
                );
            }
            
        },

        setSortByCategory: (state, action: PayloadAction<FilterParam>) =>{
            state.filterParam.category = action.payload.category;
            
            if(state.filterParam.searchObj.length > 0){

                state.filteredProduct = state.filteredProduct.filter(product =>        
                    product.title.toLowerCase().includes(state.filterParam.searchObj)
                ); 
            }
            
            if(state.filterParam.category === 'all'){ 
                state.filteredProduct = state.products;
            }else{

                state.filteredProduct = state.products.filter(product =>        
                    product.category.toLowerCase() === action.payload.category.toLowerCase()
                );
            };

        },

        sortByPrice: (state, action: PayloadAction<FilterParam>) => {
            state.filterParam.sort = action.payload.sort;
            if(state.filteredProduct.length === 0){
                state.filteredProduct = state.products.slice();
            }
            if(state.filterParam.sort === 'high'){
                state.filteredProduct = state.filteredProduct.sort((a, b) => b.price - a.price);
            }else{
                state.filteredProduct = state.filteredProduct.sort((a, b) => a.price - b.price );
            }
            
        },


        setCart: (state, action: PayloadAction<Product>) => {    
            state.cart.push(action.payload);
        },

        setRemoveFromCart: (state, action: PayloadAction<Product>) => {
            state.cart = state.cart.filter((c) => c.id !== action.payload.id);

        },

        
        

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = 'pending';
 
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = 'succeeded';
 
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string;

        });
    }
});

export const selectProducts = (state: RootState) => state.products;
export const { setsearchedParameters,sortByPrice, setCart, setRemoveFromCart, setSortByCategory} = productsSlice.actions;

export default productsSlice.reducer;

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

interface ProductsState {
    products: Product[];
    cart: Product[]; 
    filteredProduct:Product[];
    searchedParameters:string;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: ProductsState = {
    products: [],
    filteredProduct:[],
    searchedParameters: '',
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
        setsearchedParameters: (state, action: PayloadAction<string>) => {
            const searchTerm = action.payload.toLowerCase();
            state.searchedParameters = searchTerm; // Обновляем значение поискового запроса
            state.filteredProduct = state.products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm)
            );
        }
        

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
export const { setsearchedParameters} = productsSlice.actions;

export default productsSlice.reducer;

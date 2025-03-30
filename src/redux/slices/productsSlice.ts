import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: ProductsState = {
    products: [],
    loading: 'idle',
    error: ''
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            // const response = await fetch("https://fakestoreapi.com/products");
            
            const response = await fetch("https://api.allorigins.win/raw?url=https://fakestoreapi.com/products");
            if (!response.ok) throw new Error("error");
            return await response.json();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "unknown error";
            return thunkAPI.rejectWithValue(errorMessage); 
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = 'pending';
            console.log(state.loading)
 
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = 'succeeded';
            console.log(state.loading)
            console.log(state.products)
 
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload as string;
            console.log(state.loading)

        });
    }
});

export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;

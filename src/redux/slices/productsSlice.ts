import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AxiosError } from "axios";


interface Rating {
    rate: number,
    count: number
}

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}


interface ProductsState {
    products: Product[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: ProductsState = {
    products: [],
    loading: 'idle'
}

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products/");
          return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            return thunkAPI.rejectWithValue(axiosError.response?.data || "Ошибка загрузки товаров");
        }
      }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        example: () => {
            console.log("example");
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
    } 
});

export const selectProducts = (state: ProductsState) => state.products;
export const {example} = productsSlice.actions;
export default productsSlice.reducer;
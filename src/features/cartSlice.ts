import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface GetNearbyRestaurantData {
  latitude: number;
  longitude: number;
}

export const getCartItems = createAsyncThunk(
  'getCartItems',
  async (_, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

    try {
      const response = await axios.get(URL, { withCredentials: true });
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface Item {
  dish_id: string;
  quantity: number;
}

export const addCartItems = createAsyncThunk(
  'addCartItems',
  async (item: Item, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

    try {
      const response = await axios.post(
        URL,
        {
          dish_id: item.dish_id,
          quantity: item.quantity,
        },
        { withCredentials: true }
      );
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface updateCartItem {
  cart_item_id: string;
  quantity: number;
}

export const updateCartItems = createAsyncThunk(
  'updateCartItems',
  async (item: updateCartItem, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

    try {
      const response = await axios.put(
        URL,
        {
          cart_item_id: item.cart_item_id,
          quantity: item.quantity,
        },
        { withCredentials: true }
      );
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteCartItems = createAsyncThunk(
  'deleteCartItems',
  async (cart_item_id: string, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

    try {
      const response = await axios.delete(
        `${URL}?cart_item_id=${cart_item_id}`,
        { withCredentials: true }
      );
      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface CartItem {
  id: string;
  dishName: string;
  price: number;
  quantity: number;
}

const initialState = {
  isLoading: false,
  cart: [] as CartItem[],
  error: null as unknown | null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getCartItems.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addCartItems.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(updateCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateCartItems.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteCartItems.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteCartItems.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;

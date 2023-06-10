import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPopularCuisine = createAsyncThunk(
  'getPopularCuisine',
  async (_, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/dishes/popular-cuisine`;
    try {
      const response = await axios.get(URL);

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getCuisine = createAsyncThunk(
  'getCuisine',
  async (dish_name: string, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/dishes/${dish_name}`;
    try {
      const response = await axios.get(URL);

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getRegionCuisine = createAsyncThunk(
  'getRegionCuisine',
  async (region_name: string, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/dishes/region/${region_name}`;
    try {
      const response = await axios.get(URL);

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const searchCuisine = createAsyncThunk(
  'searchCuisine',
  async (q: string, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/dishes/search/${q}`;
    try {
      const response = await axios.get(URL);

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  rating_sum: number;
  number_of_voters: number;
}

const initialState = {
  isLoading: false,
  dish: {} as Dish,
  dishes: [] as Dish[],
  regionDish: [] as Dish[],
  searchDish: [] as Dish[],
  error: null as unknown | null,
};

const dishSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularCuisine.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dishes = action.payload;
      state.error = null;
    });
    builder.addCase(getPopularCuisine.pending, (state, _) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPopularCuisine.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getCuisine.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dish = action.payload;
      state.error = null;
    });
    builder.addCase(getCuisine.pending, (state, _) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCuisine.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getRegionCuisine.fulfilled, (state, action) => {
      state.isLoading = false;
      state.regionDish = action.payload;
      state.error = null;
    });
    builder.addCase(getRegionCuisine.pending, (state, _) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getRegionCuisine.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(searchCuisine.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchDish = action.payload;
      state.error = null;
    });
    builder.addCase(searchCuisine.pending, (state, _) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(searchCuisine.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default dishSlice.reducer;

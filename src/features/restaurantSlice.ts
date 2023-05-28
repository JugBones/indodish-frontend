import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface GetNearbyRestaurantData {
  latitude: number;
  longitude: number;
}

export const getNearbyRestaurant = createAsyncThunk(
  'getNearbyRestaurant',
  async (getNearbyRestaurantData?: GetNearbyRestaurantData, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/restaurants/nearby-restaurants`;
    try {
      if (getNearbyRestaurantData == null) {
        const response = await axios.get(URL);
        return response.data;
      } else {
        const response = await axios.get(
          `${URL}?latitude=${getNearbyRestaurantData.latitude}&longitude=${getNearbyRestaurantData.longitude}`
        );
        return response.data;
      }
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

interface Restaurant {}

const initialState = {
  isLoading: false,
  restaurants: [] as Restaurant[],
  error: null as unknown | null,
};

const restaurantSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNearbyRestaurant.fulfilled, (state, action) => {
      state.isLoading = false;
      state.restaurants = action.payload;
      state.error = null;
    });
    builder.addCase(getNearbyRestaurant.pending, (state, _) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getNearbyRestaurant.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default restaurantSlice.reducer;

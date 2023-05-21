import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export const submitContactForm = createAsyncThunk(
  'submitContactForm',
  async (contactForm: ContactFormData, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/contact-form`;
    try {
      const response = await axios.post(URL, {
        name: contactForm.name,
        email: contactForm.email,
        phone_number: contactForm.phoneNumber,
        message: contactForm.message,
      });

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  ok: false,
  error: null as unknown | null,
};

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitContactForm.fulfilled, (state, _) => {
      state.isLoading = false;
      state.ok = true;
      state.error = null;
    });
    builder.addCase(submitContactForm.pending, (state, _) => {
      state.ok = false;
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(submitContactForm.rejected, (state, action) => {
      state.ok = false;
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default contactFormSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface SignUpUserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface SignInUserData {
  email: string;
  password: string;
}

export const signUp = createAsyncThunk(
  'sign-up',
  async (user: SignUpUserData, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/register`;
    try {
      const response = await axios.post(URL, {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation,
      });

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  'sign-in',
  async (user: SignInUserData, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/tokens`;
    try {
      const response = await axios.post(
        URL,
        {
          email: user.email,
          password: user.password,
        },
        { withCredentials: true }
      );

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  'refresh-access-token',
  async (_, thunkApi) => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/tokens`;
    try {
      const response = await axios.put(URL, {}, { withCredentials: true });

      return response.data;
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const signOut = createAsyncThunk('signout', async (_, thunkApi) => {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/tokens`;
  try {
    const response = await axios.delete(URL, { withCredentials: true });

    return response.data;
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});

export const resetPassword = createAsyncThunk(
  'resetPassword',
  async (email: string, thunkApi) => {}
);

interface User {
  first_name: string;
  last_name: string;
  restaurant_id: string | null;
}

const initialState = {
  isLoading: false,
  user: null as User | null,
  error: null as unknown | null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signUp.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(signIn.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(refreshAccessToken.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(refreshAccessToken.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(signOut.fulfilled, (state, _) => {
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(signOut.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;

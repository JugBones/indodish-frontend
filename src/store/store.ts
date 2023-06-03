import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import contactFormReducer from '../features/contactFormSlice';
import restaurantReducer from '../features/restaurantSlice';
import cartReducer from '../features/cartSlice';
import dishReducer from '../features/cuisineSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    contactForm: contactFormReducer,
    restaurants: restaurantReducer,
    cart: cartReducer,
    dish: dishReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

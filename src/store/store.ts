import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import contactFormReducer from '../features/contactFormSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    contactForm: contactFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

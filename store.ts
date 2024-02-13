// store.js
import { configureStore } from "@reduxjs/toolkit";
import api from "./hooks/useApi";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

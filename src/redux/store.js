import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./slices/houseSlice";
import activeCardReducer from './slices/activeCardSlice';

export const store = configureStore({
  reducer: {
    house: houseReducer,
    activeCard: activeCardReducer,
  },
});

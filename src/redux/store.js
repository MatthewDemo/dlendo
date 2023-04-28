import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./slices/houseSlice";

export const store = configureStore({
  reducer: {
    house: houseReducer,
  },
});

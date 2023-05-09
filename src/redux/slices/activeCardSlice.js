import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCard: 1,
};

export const activeCardSlice = createSlice({
  name: "activeCard",
  initialState,
  reducers: {
    changeActiveCard: (state, action) => {
      state.activeCard = action.payload;
    },
  },
});

export const { changeActiveCard } = activeCardSlice.actions;

export default activeCardSlice.reducer;

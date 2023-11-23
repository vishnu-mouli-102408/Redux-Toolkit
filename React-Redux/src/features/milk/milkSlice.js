import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfMilkBottles: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfMilkBottles--;
    },
    restocked: (state, action) => {
      state.numOfMilkBottles += action.payload;
    },
  },
});

export default milkSlice.reducer;
export const { ordered, restocked } = milkSlice.actions;

import { ordered as milkOrdered } from "../milk/milkSlice";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfBooks: 20,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfBooks--;
    },
    restocked: (state, action) => {
      state.numOfBooks += action.payload;
    },
  },
  //   extraReducers: {
  //     ["milk/ordered"]: (state, action) => {
  //       state.numOfBooks--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(milkOrdered, (state) => {
      state.numOfBooks--;
    });
  },
});

export default bookSlice.reducer;
export const { ordered, restocked } = bookSlice.actions;

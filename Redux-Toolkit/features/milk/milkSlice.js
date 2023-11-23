const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfMilkBottles: 10,
};

const milkSlice = createSlice({
  name: "milk",
  initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfMilkBottles--;
    },
    restocked: (state, action) => {
      state.numOfMilkBottles += action.payload;
    },
  },
});

module.exports = milkSlice.reducer;
module.exports.milkActions = milkSlice.actions;

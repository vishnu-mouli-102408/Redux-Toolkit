const { milkActions } = require("../milk/milkSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfBooks: 20,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    ordered: (state, action) => {
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
    builder.addCase(milkActions.ordered, (state, action) => {
      state.numOfBooks--;
    });
  },
});

module.exports = bookSlice.reducer;
module.exports.bookActions = bookSlice.actions;

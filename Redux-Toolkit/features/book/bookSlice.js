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
});

module.exports = bookSlice.reducer;
module.exports.bookActions = bookSlice.actions;

const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../features/book/bookSlice");
const milkReducer = require("../features/milk/milkSlice");

const store = configureStore({
  reducer: {
    book: bookReducer,
    milk: milkReducer,
  },
});

module.exports = store;

const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../features/book/bookSlice");

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

module.exports = store;

const configureStore = require("@reduxjs/toolkit").configureStore;
const bookReducer = require("../features/book/bookSlice");
const milkReducer = require("../features/milk/milkSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const postReducer = require("../features/posts/postSlice");

const store = configureStore({
  reducer: {
    book: bookReducer,
    milk: milkReducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;

import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/book/bookSlice";
import milkReducer from "../features/milk/milkSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    milk: milkReducer,
    post: postReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

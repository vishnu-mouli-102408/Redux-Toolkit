const store = require("./apps/store");
const { bookActions } = require("./features/book/bookSlice");
const { milkActions } = require("./features/milk/milkSlice");
const fetchUsers = require("./features/posts/postSlice").fetchUsers;

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  //   console.log("Updated State", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.ordered());
// store.dispatch(bookActions.restocked(3));

// store.dispatch(milkActions.ordered());
// store.dispatch(milkActions.ordered());
// store.dispatch(milkActions.ordered());
// store.dispatch(milkActions.restocked(4));

// unsubscribe();

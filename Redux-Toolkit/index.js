const store = require("./apps/store");
const { bookActions } = require("./features/book/bookSlice");
const { milkActions } = require("./features/milk/milkSlice");

console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.ordered());
store.dispatch(bookActions.restocked(3));

store.dispatch(milkActions.ordered());
store.dispatch(milkActions.ordered());
store.dispatch(milkActions.ordered());
store.dispatch(milkActions.restocked(4));

unsubscribe();

const redux = require("redux");
const createStore = redux.createStore;

const BOOK_ORDERED = "BOOK_ORDERED";
const BOOK_RESTOCKED = "BOOK_RESTOCKED";

function orderBook(qty = 1) {
  return {
    type: BOOK_ORDERED,
    payload: qty,
  };
}

function restockBook(qty = 1) {
  return {
    type: BOOK_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfBooks: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ORDERED:
      return {
        ...state,
        numOfBooks: state.numOfBooks - action.payload,
      };
    case BOOK_RESTOCKED:
      return {
        ...state,
        numOfBooks: state.numOfBooks + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());

const unsunscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(orderBook(3));
store.dispatch(orderBook(3));

store.dispatch(restockBook(3));

unsunscribe();

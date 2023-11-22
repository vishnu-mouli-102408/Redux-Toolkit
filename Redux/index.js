const redux = require("redux");
const bindActionCreaters = redux.bindActionCreators;
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

// store.dispatch(orderBook());
// store.dispatch(orderBook());

// store.dispatch(restockBook(3));

const actions = bindActionCreaters({ orderBook, restockBook }, store.dispatch);

actions.orderBook();
actions.restockBook(3);

unsunscribe();

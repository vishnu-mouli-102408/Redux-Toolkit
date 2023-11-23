const redux = require("redux");
const reduxLogger = require("redux-logger");
const bindActionCreaters = redux.bindActionCreators;
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;

const BOOK_ORDERED = "BOOK_ORDERED";
const BOOK_RESTOCKED = "BOOK_RESTOCKED";

const MILK_ORDERED = "MILK_ORDERED";
const MILK_RESTOCKED = "MILK_RESTOCKED";

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

function orderMilk(qty = 1) {
  return {
    type: MILK_ORDERED,
    payload: qty,
  };
}

function restockMilk(qty = 1) {
  return {
    type: MILK_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfBooks: 20,
//   numOfMilkBottles: 10,
// };

const initialBookState = {
  numOfBooks: 20,
};

const initilMilkState = {
  numOfMilkBottles: 15,
};

const bookReducer = (state = initialBookState, action) => {
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

const milkReducer = (state = initilMilkState, action) => {
  switch (action.type) {
    case MILK_ORDERED:
      return {
        ...state,
        numOfMilkBottles: state.numOfMilkBottles - action.payload,
      };
    case MILK_RESTOCKED:
      return {
        ...state,
        numOfMilkBottles: state.numOfMilkBottles + action.payload,
      };
    case BOOK_ORDERED:
      return {
        ...state,
        numOfMilkBottles: state.numOfMilkBottles - action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  book: bookReducer,
  milk: milkReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("initial state", store.getState());

const unsunscribe = store.subscribe(() => {
  // console.log("Updated state", store.getState())
});

// store.dispatch(orderBook());
// store.dispatch(orderBook());

// store.dispatch(restockBook(3));

const actions = bindActionCreaters(
  { orderBook, restockBook, orderMilk, restockMilk },
  store.dispatch
);

actions.orderBook();
actions.restockBook(3);

actions.orderMilk(3);
actions.restockMilk();

unsunscribe();

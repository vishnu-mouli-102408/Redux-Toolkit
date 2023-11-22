const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

const initialState = {
  name: "Vishnu Mouli",
  address: {
    city: "Vizag",
    street: "Marikavalasa",
    village: "Thimidi",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());

const unsunscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(updateStreet("Hello World"));

unsunscribe();

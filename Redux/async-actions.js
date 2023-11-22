const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const FETCH_POSTS_REQUESTED = "FETCH_POSTS_REQUESTED";
const FETCH_POSTS_SUCCEEDED = "FETCH_POSTS_SUCCEEDED";
const FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED";

const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUESTED,
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCEEDED,
    payload: posts,
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POSTS_SUCCEEDED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: action.payload,
      };
  }
};

const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.map((post) => post.id);
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log("Initial State", store.getState()));

store.dispatch(fetchPosts());

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncthunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  isLoading: false,
  data: [],
  error: "",
};

const fetchUsers = createAsyncthunk("post/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      response.data.map((post) => post.id);
    });
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchUsers = fetchUsers;

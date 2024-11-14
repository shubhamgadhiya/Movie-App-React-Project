import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
        state.url = action.payload;
    },
    getGenres: (state, action) => {
        state.genres = action.payload;
    },
  },
});

export const {getApiConfiguration, getGenres} = movieSlice.actions;
export default movieSlice.reducer;
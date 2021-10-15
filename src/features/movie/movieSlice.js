import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
}

const movieSlice = createSlice({             //action dipatch some event to reducer and the reducer change its database to a state and dispatch it to the UI
    name: "movie",
    initialState,  
    reducer: {
        setMovies: (state, action) =>{
            state.movies = action.payload;
        }
    }
})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
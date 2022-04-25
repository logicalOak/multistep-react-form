import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* Initializing the state of the slice. */
const initialState = {};

/* This is the first line of the `createAsyncThunk` function. */
// export const exampleFetch = createAsyncThunk("some/exampleFetch", async (_, {rejectWithValue}) => {
//     try {
//
//     } catch (e) {
//         const message = (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
//         return rejectWithValue(message)
//     }
// })

/* It creates a new slice. */
export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		// reset: (state) => {
		// 	state.YOUR_STATE = {};
		// },
	},
	extraReducers: {
		// [exampleFetch.pending]: (state) => {
		// },
		// [exampleFetch.fulfilled]: (state, {payload}) => {
		// },
		// [exampleFetch.rejected]: () => console.log("rejected"),
	},
});

/* Exporting the `resetUsers` action from the slice. */
export const { reset } = appSlice.actions;
/* Exporting the reducer. */
export default appSlice.reducer;

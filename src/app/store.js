import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';

/* Creating a store with the reducer we just created. */
export const store = configureStore({
	reducer: {
		app: appReducer,
	},
});

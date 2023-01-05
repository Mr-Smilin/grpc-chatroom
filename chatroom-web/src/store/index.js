import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/user";
import pageReducer from "../reducer/page";
import roomReducer from "../reducer/room";

const store = configureStore({
	reducer: {
		user: userReducer,
		page: pageReducer,
		room: roomReducer,
	},
});

export default store;

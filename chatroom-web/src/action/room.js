export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (message) => ({
	type: ADD_MESSAGE,
	payload: {
		message: message,
	},
});

export const INIT_ROOM = "INIT_ROOM";

export const initMessage = () => ({
	type: INIT_ROOM,
	payload: {
		message: [],
	},
});

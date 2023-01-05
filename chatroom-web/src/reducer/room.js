import * as actions from "../action/room";

const initState = {
	message: [],
};

const roomReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.ADD_MESSAGE:
			return {
				...state,
				message: [...state.message, action.payload.message],
			};
		case actions.INIT_ROOM:
			return {
				...state,
				message: action.payload.message,
			};
		default:
			return state;
	}
};

export default roomReducer;

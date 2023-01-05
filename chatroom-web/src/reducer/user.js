import * as actions from "../action/user";

const initState = {
	name: "default",
};

const userReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.EDIT_USER:
			return {
				...state,
				name: action.payload.name,
			};
		default:
			return state;
	}
};

export default userReducer;

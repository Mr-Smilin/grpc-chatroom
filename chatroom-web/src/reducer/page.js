import * as actions from "../action/page";
import { CHATLIST } from "../constant/pageConstant";

const initState = {
	current: CHATLIST,
	roomId: "",
};

const pageReducer = (state = initState, action) => {
	switch (action.type) {
		case actions.CHANGE_PAGE:
			return {
				...state,
				current: action.payload.current,
			};
		case actions.CHANGE_ROOM:
			return {
				...state,
				roomId: action.payload.roomId,
			};
		case actions.INIT_PAGE:
			return {
				...state,
				current: action.payload.current,
				roomId: action.payload.roomId,
			};
		default:
			return state;
	}
};

export default pageReducer;

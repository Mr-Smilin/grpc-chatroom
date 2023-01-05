import { CHATLIST } from "../constant/pageConstant";

export const CHANGE_PAGE = "CHANGE_PAGE";

export const changePage = (page) => ({
	type: CHANGE_PAGE,
	payload: {
		current: page,
	},
});

export const CHANGE_ROOM = "CHANGE_ROOM";

export const changeRoom = (roomId) => ({
	type: CHANGE_ROOM,
	payload: {
		roomId: roomId,
	},
});

export const INIT_PAGE = "INIT_PAGE";

export const initPage = () => ({
	type: INIT_PAGE,
	payload: {
		current: CHATLIST,
		roomId: "",
	},
});

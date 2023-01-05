export const EDIT_USER = "ADD_TODO";

export const editUser = (user) => ({
	type: EDIT_USER,
	payload: {
		name: user.name,
	},
});

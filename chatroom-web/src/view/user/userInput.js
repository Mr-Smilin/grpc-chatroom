import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";

import { editUser } from "../../action/user";

const FloatBoxStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border: #000000 1px solid;
	padding: 0 5px 5px 5px;
	position: absolute;
	top: 1%;
	left: 1%;
	box-shadow: 4px 4px 5px 1px #cccccc;

	@media screen and (max-width: 1100px) {
		padding-bottom: 100em;
		box-shadow: 0 0 0 0 #cccccc;
		border-top: 0px;
		border-bottom: 0px;
		border-left: 0px;
		float: left;
		width: 200px;
	}

	@media screen and (max-width: 850px) {
		display: none;
	}
`;

const User = () => {
	const dispatch = useDispatch();
	const userRedux = useSelector((state) => state.user.name);

	const [userName, setUserName] = useState(userRedux);

	return (
		<FloatBoxStyled>
			<h3>your name is {userRedux}</h3>
			<div>
				<input
					type="text"
					value={userName}
					onChange={(event) => setUserName(event.target.value)}
				/>
				<button
					onClick={() =>
						dispatch(
							editUser({
								name: userName,
							})
						)
					}
				>
					login
				</button>
			</div>
		</FloatBoxStyled>
	);
};

export default User;

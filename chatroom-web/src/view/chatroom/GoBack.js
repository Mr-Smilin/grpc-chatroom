import React from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { initPage } from "../../action/page";
import { initMessage } from "../../action/room";

import { LeaveRoom } from "../../controller/grpcController";

const FloatButtonStyled = styled.button`
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
	const pageRedux = useSelector((state) => state?.page);
	const userRedux = useSelector((state) => state?.user);

	return (
		<FloatButtonStyled
			onClick={() => {
				LeaveRoom(pageRedux?.roomId, userRedux?.name);
				dispatch(initPage());
				dispatch(initMessage());
			}}
		>
			BACK
		</FloatButtonStyled>
	);
};

export default User;

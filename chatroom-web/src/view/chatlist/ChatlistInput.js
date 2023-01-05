import React, { useState } from "react";
import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";
import { changePage, changeRoom } from "../../action/page";
import { initMessage } from "../../action/room";

import { addMessage } from "../../action/room";

import { StreamRoom } from "../../controller/grpcController";

import { CHATROOM } from "../../constant/pageConstant";

const MainInputStyled = styled.div`
	display: flex;
`;

const InputBoxStyled = styled.input`
	flex-grow: 1;
`;

const ButtonBoxStyled = styled.button`
	height: 50px;
	width: 100px;
	margin-left: 5px;
	background-color: #59e9d2bf;
	border: none;
	font-size: 16px;

	:hover {
		border: #000000 1px solid;
	}
`;

const ChatlistInput = () => {
	const dispatch = useDispatch();
	const userRedux = useSelector((state) => state?.user);
	const [roomId, setRoomId] = useState("");
	const handleMessageStream = (message) => {
		dispatch(addMessage(message));
	};
	return (
		<MainInputStyled>
			<InputBoxStyled
				type="text"
				placeholder="Enter room ID"
				onChange={(event) => {
					setRoomId(event.target.value);
				}}
			></InputBoxStyled>
			<ButtonBoxStyled
				onClick={() => {
					dispatch(initMessage());
					dispatch(changePage(CHATROOM));
					dispatch(changeRoom(roomId));
					StreamRoom(roomId, userRedux?.name, handleMessageStream);
				}}
			>
				submit
			</ButtonBoxStyled>
		</MainInputStyled>
	);
};

export default ChatlistInput;

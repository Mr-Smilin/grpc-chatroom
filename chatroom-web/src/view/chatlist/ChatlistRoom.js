import React from "react";
import styled from "@emotion/styled";

import { useDispatch, useSelector } from "react-redux";
import { changePage, changeRoom } from "../../action/page";
import { initMessage } from "../../action/room";

import { addMessage } from "../../action/room";

import { StreamRoom } from "../../controller/grpcController";

import { CHATROOM } from "../../constant/pageConstant";

const ChatlistRoomStyled = styled.div`
	background-color: #ffffffe0;
	color: #000000;
	width: 94%;
	height: 100px;
	min-height: 100px;
	margin-top: 10px;
	border-radius: 5px;
	padding: 10px;
	position: relative;
	transition: background-color 0.3s;

	:hover {
		background-color: #ffffffa8;
	}
`;
const RoomIdStyled = styled.span`
	font-size: 14px;
	font-weight: bold;
	position: absolute;
	top: 10px;
	left: 10px;
	display: inline-block;
`;
const PeopleStyled = styled.span`
	font-size: 14px;
	font-weight: bold;
	position: absolute;
	bottom: 10px;
	left: 10px;
	display: inline-block;
`;

const ChatlistRoom = ({ roomValues }) => {
	const { roomId, people } = roomValues;
	const dispatch = useDispatch();
	const userRedux = useSelector((state) => state?.user);
	const handleMessageStream = (message) => {
		dispatch(addMessage(message));
	};

	return (
		<ChatlistRoomStyled
			onClick={(e) => {
				dispatch(initMessage());
				dispatch(changePage(CHATROOM));
				dispatch(changeRoom(roomId));
				StreamRoom(roomId, userRedux?.name, handleMessageStream);
			}}
		>
			<RoomIdStyled>房號: {roomId}</RoomIdStyled>
			<PeopleStyled>當前人數: {people}</PeopleStyled>
		</ChatlistRoomStyled>
	);
};

export default ChatlistRoom;

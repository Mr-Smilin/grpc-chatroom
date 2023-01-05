import React from "react";
import styled from "@emotion/styled";

import { useSelector } from "react-redux";

import GoBack from "./GoBack";
import ChatroomMain from "./ChatroomMain";
import ChatroomInput from "./ChatroomInput";

const ChatroomStyled = styled.div`
	margin-top: 10px;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-height: 100%;

	@media screen and (max-width: 1100px) {
		margin-left: 200px;
	}

	@media screen and (max-width: 850px) {
		margin-left: 0px;
	}
`;

const ChatroomTitleStyled = styled.div`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
	border-bottom: 3px solid;
`;

const Chatroom = () => {
	const pageRedux = useSelector((state) => state?.page);

	return (
		<>
			<GoBack></GoBack>
			<ChatroomStyled>
				<ChatroomTitleStyled> {pageRedux?.roomId} </ChatroomTitleStyled>
				<ChatroomMain></ChatroomMain>
				<ChatroomInput></ChatroomInput>
			</ChatroomStyled>
		</>
	);
};

export default Chatroom;

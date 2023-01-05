import React from "react";
import styled from "@emotion/styled";

const ChatroomMyselfMessageStyled = styled.div`
	padding: 10px;
	display: inline-block;
	max-width: 45%;
	max-height: 100%;
	background-color: #00ff039c;
	color: #000000;
	border-radius: 5px;
	margin-top: 15px;
	margin-right: 10px;
	align-self: flex-end;
`;

const ChatroomMyselfMessage = ({ message }) => {
	return <ChatroomMyselfMessageStyled>{message}</ChatroomMyselfMessageStyled>;
};

export default ChatroomMyselfMessage;

import React from "react";
import styled from "@emotion/styled";

const ChatroomSystemMessageStyled = styled.div`
	padding: 10px;
	display: inline-block;
	max-width: 45%;
	max-height: 100%;
	background-color: #6a6a6a8f;
	color: #ffffff6b;
	border-radius: 5px;
	margin-top: 15px;
	align-self: center;
`;

const ChatroomSystemMessage = ({ message }) => {
	return <ChatroomSystemMessageStyled>{message}</ChatroomSystemMessageStyled>;
};

export default ChatroomSystemMessage;

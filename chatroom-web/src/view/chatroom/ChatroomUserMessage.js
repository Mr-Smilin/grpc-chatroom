import React from "react";
import styled from "@emotion/styled";

const ChatroomUserMessageStyled = styled.div`
	padding: 10px;
	display: inline-block;
	max-width: 45%;
	max-height: 100%;
	background-color: #ffffff;
	color: #000000;
	border-radius: 5px;
	margin-top: 25px;
	margin-left: 10px;
	align-self: flex-start;
	position: relative;
`;

const ChatRoomUserTitleStyled = styled.div`
	color: #e1e1e1;
	position: absolute;
	top: -20px;
	left: 0;
`;

const ChatroomUserMessage = ({ user, message }) => {
	return (
		<ChatroomUserMessageStyled>
			{message}
			<ChatRoomUserTitleStyled>{user}</ChatRoomUserTitleStyled>
		</ChatroomUserMessageStyled>
	);
};

export default ChatroomUserMessage;

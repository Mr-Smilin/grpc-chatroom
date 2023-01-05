import React, { useState } from "react";
import styled from "@emotion/styled";

import ChatlistRoom from "./ChatlistRoom";

const BaseChatStyled = styled.div`
	flex-grow: 1;
	background-color: #333333;
	color: #ffffff6b;
	line-height: 20px;
	max-width: 600px;
	width: 100em;
	margin-bottom: 10px;
	height: 100%;
	border-radius: 15px;
`;

const ChatListStyled = styled(BaseChatStyled)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: overlay;
`;

const NoChatStyled = styled(BaseChatStyled)`
	text-align: center;
	font-size: 28px;
	font-weight: bold;
`;

const testValue = [
	{
		roomId: "123",
		people: 5,
	},
];

const ChatlistMain = () => {
	const [chatValue, setChatValue] = useState(testValue);

	return (
		<>
			{!!chatValue?.length ? (
				<ChatListStyled>
					{chatValue.map((chat, i) => {
						return <ChatlistRoom key={i} roomValues={chat}></ChatlistRoom>;
					})}
				</ChatListStyled>
			) : (
				<NoChatStyled>目前沒有聊天室</NoChatStyled>
			)}
		</>
	);
};

export default ChatlistMain;

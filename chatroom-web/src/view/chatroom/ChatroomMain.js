import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { useSelector } from "react-redux";

import ChatroomMessage from "./ChatroomMessage";

const BaseRoomStyled = styled.div`
	flex-grow: 1;
	background-color: #333333;
	color: #ffffff6b;
	line-height: 20px;
	max-width: 600px;
	width: 100em;
	margin-bottom: 10px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 15px;
`;

const ChatroomMain = () => {
	const roomRedux = useSelector((state) => state?.room);
	const [message, setMessage] = useState(roomRedux?.message);

	useEffect(() => {
		setMessage(roomRedux?.message);
	}, [roomRedux?.message]);
	return (
		<BaseRoomStyled>
			{message.map((item, i) => {
				return <ChatroomMessage key={i} chatMessage={item} />;
			})}
		</BaseRoomStyled>
	);
};

export default ChatroomMain;

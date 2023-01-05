import React, { useCallback } from "react";

import { useSelector } from "react-redux";

import ChatroomMyselfMessage from "./ChatroomMyselfMessage";
import ChatroomUserMessage from "./ChatroomUserMessage";
import ChatroomSystemMessage from "./ChatroomSystemMessage";

const ChatroomMessage = ({ chatMessage }) => {
	const { type, user, message } = chatMessage;
	const userRedux = useSelector((state) => state?.user);
	const handleMessageBox = useCallback(() => {
		switch (type) {
			case "1":
				if (user === userRedux?.name) {
					return <ChatroomMyselfMessage message={message} />;
				}
				return <ChatroomUserMessage user={user} message={message} />;
			case "2":
				return <ChatroomSystemMessage message={message} />;
			default:
				return <ChatroomSystemMessage message={message} />;
		}
	}, [message, type, user, userRedux?.name]);
	return <>{handleMessageBox()}</>;
};
export default ChatroomMessage;

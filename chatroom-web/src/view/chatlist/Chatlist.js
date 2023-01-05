import React from "react";
import styled from "@emotion/styled";

import UserInput from "../user/userInput";
import ChatlistMain from "./ChatlistMain";
import ChatlistInput from "./ChatlistInput";

const ChatlistStyled = styled.div`
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

const ChatlistTitleStyled = styled.div`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 10px;
	border-bottom: 3px solid;
`;

const Chatlist = () => {
	return (
		<>
			<UserInput></UserInput>
			<ChatlistStyled>
				<ChatlistTitleStyled> NOW CHAT </ChatlistTitleStyled>
				<ChatlistMain></ChatlistMain>
				<ChatlistInput></ChatlistInput>
			</ChatlistStyled>
		</>
	);
};

export default Chatlist;

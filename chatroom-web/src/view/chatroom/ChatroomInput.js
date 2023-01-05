import React, { useState } from "react";
import styled from "@emotion/styled";

import { useSelector } from "react-redux";

import { SendMessage } from "../../controller/grpcController";

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

const ChatroomInput = () => {
	const pageRedux = useSelector((state) => state?.page);
	const userRedux = useSelector((state) => state?.user);
	const [message, setMessage] = useState("");
	return (
		<MainInputStyled>
			<InputBoxStyled
				type="text"
				placeholder="Enter message"
				value={message}
				onChange={(event) => {
					setMessage(event.target.value);
				}}
			></InputBoxStyled>
			<ButtonBoxStyled
				onClick={() => {
					SendMessage(pageRedux?.roomId, "1", userRedux?.name, message);
					setMessage("");
				}}
			>
				submit
			</ButtonBoxStyled>
		</MainInputStyled>
	);
};

export default ChatroomInput;

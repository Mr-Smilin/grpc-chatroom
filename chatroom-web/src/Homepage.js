import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { useSelector } from "react-redux";

import { CHATLIST, CHATROOM } from "./constant/pageConstant";

import Chatlist from "./view/chatlist/Chatlist";
import Chatroom from "./view/chatroom/Chatroom";

const Main = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
`;

const Homepage = () => {
	const pageRedux = useSelector((state) => state?.page);
	const [currentPage, setCurrentPage] = useState(pageRedux?.current);

	useEffect(() => {
		setCurrentPage(pageRedux?.current);
	}, [pageRedux]);

	return (
		<Main>
			{currentPage === CHATLIST && <Chatlist />}
			{currentPage === CHATROOM && <Chatroom />}
		</Main>
	);
};

export default Homepage;

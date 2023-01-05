global.XMLHttpRequest = require("xhr2");
const { RoomRequest } = require("../protofile/chatroom_pb");
const { ChatroomServiceClient } = require("../protofile/chatroom_grpc_web_pb");

const chatroomService = new ChatroomServiceClient(
	process.env.REACT_APP_SERVER || "http://localhost:10000"
);

exports.SendMessage = (room, type, user, message) => {
	let request = new RoomRequest();
	request.setRoom(room);
	request.setType(type);
	request.setUser(user);
	request.setMessage(message);
	chatroomService.sendMessage(request, {}, function (err, response) {});
};

exports.StreamRoom = (room, user, callback) => {
	let request = new RoomRequest();
	request.setRoom(room);
	request.setUser(user);
	let stream = chatroomService.streamRoom(request, {});
	stream.on("data", (response) => {
		let message = {
			roomId: response.getRoom(),
			type: response.getType(),
			user: response.getUser(),
			message: response.getMessage(),
		};
		callback(message);
	});
	stream.on("error", (err) => {
		console.log("stream error ", err);
	});
	stream.on("end", () => {
		console.log("end stream");
	});
};

exports.LeaveRoom = (room, user) => {
	let request = new RoomRequest();
	request.setRoom(room);
	request.setUser(user);
	chatroomService.leaveRoom(request, {}, function (err, response) {});
};

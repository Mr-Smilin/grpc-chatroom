package com.chatroom.grpcspringboot.controller;

import com.chatroom.chatroom.*;
import com.chatroom.grpcspringboot.server.RoomServer;
import io.grpc.stub.StreamObserver;
import lombok.RequiredArgsConstructor;
import net.devh.boot.grpc.server.service.GrpcService;

@GrpcService
@RequiredArgsConstructor
public class ChatroomServiceImpl extends ChatroomServiceGrpc.ChatroomServiceImplBase {

    private final RoomServer roomServer;

    @Override
    public void sendMessage(RoomRequest request, StreamObserver<Empty> responseObserver) {
        roomServer.saveMessage(request);
        responseObserver.onNext(Empty.newBuilder().build());
        responseObserver.onCompleted();
    }

    @Override
    public void streamRoom(RoomRequest request, StreamObserver<RoomReply> responseObserver) {
        roomServer.addSubscriber(request, responseObserver);
    }

    @Override
    public void leaveRoom(RoomRequest request, StreamObserver<Empty> responseObserver) {
        // 離開房間
        roomServer.delSubscriber(request);
        responseObserver.onNext(Empty.newBuilder().build());
        responseObserver.onCompleted();
    }

    @Override
    public void deleteRoom(RoomRequest request, StreamObserver<Empty> responseObserver) {
        roomServer.delRoom(request);
        responseObserver.onNext(Empty.newBuilder().build());
        responseObserver.onCompleted();
    }

}

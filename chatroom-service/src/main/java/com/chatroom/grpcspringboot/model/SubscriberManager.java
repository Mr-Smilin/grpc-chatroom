package com.chatroom.grpcspringboot.model;

import com.chatroom.chatroom.RoomReply;
import io.grpc.stub.StreamObserver;
import lombok.Data;

@Data
public class SubscriberManager {
    private String room;
    private String user;
    private StreamObserver<RoomReply> stream;
}

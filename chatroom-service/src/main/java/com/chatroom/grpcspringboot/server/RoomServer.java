package com.chatroom.grpcspringboot.server;

import com.chatroom.chatroom.RoomReply;
import com.chatroom.chatroom.RoomRequest;
import com.chatroom.grpcspringboot.model.SubscriberManager;
import io.grpc.stub.StreamObserver;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoomServer {
    private final List<SubscriberManager> subscribers = new ArrayList<>();

    public void saveMessage(RoomRequest message) {
        // 無資料庫不存儲
        // 發送消息給訂閱者
        sendMessageToSubscribers(message);
    }

    public void addSubscriber(RoomRequest message, StreamObserver<RoomReply> subscriber) {
        // 串流/接收消息
        SubscriberManager subscriberManager = new SubscriberManager();
        subscriberManager.setRoom(message.getRoom());
        subscriberManager.setUser(message.getUser());
        subscriberManager.setStream(subscriber);
        subscribers.add(subscriberManager);
    }

    public void delSubscriber(RoomRequest user) {
        for (int i = 0, len = subscribers.size(); i < len; i++) {
            if (subscribers.get(i).getRoom().equals(user.getRoom()) && subscribers.get(i).getUser().equals(user.getUser())) {
                RoomRequest leaveMessage = RoomRequest.newBuilder()
                        .setRoom(user.getRoom())
                        .setType("2")
                        .setUser(user.getUser())
                        .setMessage(user.getUser() + "已離開")
                        .build();
                sendMessageToSubscribers(leaveMessage);
                subscribers.get(i).getStream().onCompleted();
                subscribers.remove(i);
                len--;
                i--;
            }
        }
    }

    public void delRoom(RoomRequest room) {
        for (int i = 0, len = subscribers.size(); i < len; i++) {
            if (subscribers.get(i).getRoom().equals(room.getRoom())) {
                RoomRequest leaveMessage = RoomRequest.newBuilder()
                        .setRoom(room.getRoom())
                        .setType("2")
                        .setUser(subscribers.get(i).getUser())
                        .setMessage(subscribers.get(i).getUser() + "已離開")
                        .build();
                sendMessageToSubscribers(leaveMessage);
                subscribers.get(i).getStream().onCompleted();
                subscribers.remove(i);
                len--;
                i--;
            }
        }
    }

    public void sendMessageToSubscribers(RoomRequest message) {
        for (int i = 0, len = subscribers.size(); i < len; i++) {
            if (subscribers.get(i).getRoom().equals(message.getRoom())) {
                RoomReply roomReply = RoomReply.newBuilder()
                        .setRoom(message.getRoom())
                        .setType(message.getType())
                        .setUser(message.getUser())
                        .setMessage(message.getMessage())
                        .build();
                try {
                    subscribers.get(i).getStream().onNext(roomReply);
                } catch (Exception e) {
                    System.out.println("Error " + e.getMessage());
                    // 存在已關閉流
                    subscribers.remove(i);
                    len--;
                    i--;
                }
            }
        }
    }
}

package com.chatroom.grpcspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GrpcSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(GrpcSpringBootApplication.class, args);
	}

}

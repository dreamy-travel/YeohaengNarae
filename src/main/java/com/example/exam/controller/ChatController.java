package com.example.exam.controller;

import com.example.exam.model.ChatMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChatController {

    private final SimpMessageSendingOperations template;

    public ChatController(SimpMessageSendingOperations template) {
        this.template = template;
    }

    // 채팅 리스트 반환
    @GetMapping("/chat/{id}")
    public ResponseEntity<List<ChatMessage>> getChatMessages(@PathVariable("id") Long id) {
        // 임시로 리스트 형식으로 구현, 실제론 DB 접근 필요
        ChatMessage test = new ChatMessage(1L, "test", "test");
        return ResponseEntity.ok().body(List.of(test));
    }

    //메시지 송신 및 수신, /pub가 생략된 모습. 클라이언트 단에선 /pub/message로 요청
    @MessageMapping("/message")
    public ResponseEntity<Void> receiveMessage(@RequestBody ChatMessage chat) {
        try {
            // 메시지를 해당 채팅방 구독자들에게 전송
            template.convertAndSend("/sub/chatroom/1", chat);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            // 예외 발생 시 500 상태 코드 반환
            return ResponseEntity.status(500).build();
        }
    }
}

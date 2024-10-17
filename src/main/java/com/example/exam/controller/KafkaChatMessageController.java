package com.example.exam.controller;

import com.example.exam.model.KafkaChatMessage;
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;

@Controller
public class KafkaChatMessageController {
    private final KafkaTemplate<String, KafkaChatMessage> kafkaTemplate;
    private final NewTopic topic;

    public KafkaChatMessageController(KafkaTemplate<String, KafkaChatMessage> kafkaTemplate, NewTopic topic) {
        this.kafkaTemplate = kafkaTemplate;
        this.topic = topic;
    }

    @MessageMapping("/kafkachat/message")
    public void message(KafkaChatMessage chatMessage) {
        if (KafkaChatMessage.MessageType.ENTER.equals(chatMessage.getType())) {
            chatMessage.setMessage(chatMessage.getSender() + "님 등장!");
        }

        kafkaTemplate.send(topic.name(), chatMessage);
    }
}

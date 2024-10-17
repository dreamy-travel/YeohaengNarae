package com.example.exam.controller;

import com.example.exam.model.KafkaChatRoom;
import com.example.exam.repository.KafkaChatRoomRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/kafkachat")
public class KafkaChatRoomController {
    private final KafkaChatRoomRepository chatRoomRepository;

    public KafkaChatRoomController(KafkaChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    @GetMapping("/room")
    public String rooms(Model model) {
        return "/kafkachat/room";
    }

    @GetMapping("/rooms")
    @ResponseBody
    public List<KafkaChatRoom> room() {
        return chatRoomRepository.findAllRoom();
    }

    @PostMapping("/room")
    @ResponseBody
    public KafkaChatRoom createRoom(@RequestParam("name") String name) {
        return chatRoomRepository.createChatRoom(name);
    }

    @GetMapping("/room/enter/{roomId}")
    public String roomDetail(Model model, @PathVariable("roomId") String roomId) {
        model.addAttribute("roomId", roomId);
        return "/kafkachat/roomdetail";
    }

    @GetMapping("/room/{roomId}")
    @ResponseBody
    public KafkaChatRoom roomInfo(@PathVariable("roomId") String roomId) {
        return chatRoomRepository.findRoomById(roomId);
    }
}

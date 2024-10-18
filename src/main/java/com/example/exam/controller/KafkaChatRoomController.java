package com.example.exam.controller;

import com.example.exam.model.KafkaChatRoom;
import com.example.exam.repository.KafkaChatRoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class KafkaChatRoomController {
    private final KafkaChatRoomRepository chatRoomRepository;

    @GetMapping("/kafkachat/room")
    public String rooms(Model model) {
        return "/kafkachat/room";
    }

    @GetMapping("/kafkachat/rooms")
    @ResponseBody
    public List<KafkaChatRoom> room() {
        return chatRoomRepository.findAllRoom();
    }

    @PostMapping("/kafkachat/room")
    @ResponseBody
    public KafkaChatRoom createRoom(@RequestParam("name") String name) {
        return chatRoomRepository.createChatRoom(name);
    }

    @GetMapping("/kafkachat/room/enter/{roomId}")
    public String roomDetail(Model model, @PathVariable("roomId") String roomId) {
        model.addAttribute("roomId", roomId);
        return "/kafkachat/roomdetail";
    }

    @GetMapping("/kafkachat/room/{roomId}")
    @ResponseBody
    public KafkaChatRoom roomInfo(@PathVariable("roomId") String roomId) {
        return chatRoomRepository.findRoomById(roomId);
    }
}

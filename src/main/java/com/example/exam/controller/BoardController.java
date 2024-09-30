package com.example.exam.controller;

import com.example.exam.model.BoardDTO;
import com.example.exam.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoardController {

    @Autowired
    private BoardService boardService;

    // 리스트출력
    @GetMapping("/api/boardList")
    public List<BoardDTO> board(){
        List<BoardDTO> boardList = boardService.getList();
        return boardList;
    }
    // 리시트생성
    @PostMapping("/api/setBoard")
    public BoardDTO registerBoard(@RequestBody BoardDTO boardDTO){
        return boardService.save(boardDTO);
    }


}

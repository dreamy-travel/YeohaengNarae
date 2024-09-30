package com.example.exam.service;

import com.example.exam.model.BoardDTO;

import java.util.List;

public interface BoardService {
    List<BoardDTO> getList();
    BoardDTO save(BoardDTO boardDTO);
}

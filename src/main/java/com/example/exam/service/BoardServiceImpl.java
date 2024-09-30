package com.example.exam.service;

import com.example.exam.mapper.BoardMapper;
import com.example.exam.model.BoardDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Override
    public List<BoardDTO> getList(){
        return boardMapper.getList();
    }

    @Override
    public BoardDTO save(BoardDTO boardDTO) {
       boardMapper.boardSave(boardDTO);
       return boardDTO;
    }
}

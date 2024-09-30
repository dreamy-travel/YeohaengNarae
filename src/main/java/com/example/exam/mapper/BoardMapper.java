package com.example.exam.mapper;

import com.example.exam.model.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardMapper {
    List<BoardDTO> getList();
    void boardSave(BoardDTO boardDTO);
}

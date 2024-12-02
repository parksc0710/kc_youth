package com.kc.thanks.chap.mapper;

import com.kc.thanks.chap.entity.Note;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoteMapper {
    void saveNote(Note note);
}

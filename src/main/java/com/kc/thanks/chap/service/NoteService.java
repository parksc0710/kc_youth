package com.kc.thanks.chap.service;

import com.kc.thanks.chap.dto.requestDTO.NoteWriteRequestDTO;
import com.kc.thanks.chap.entity.Note;
import com.kc.thanks.chap.mapper.NoteMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class NoteService {
    private final NoteMapper mapper;

    public void save(NoteWriteRequestDTO dto) {
        Note note = dto.toEntity();
        mapper.saveNote(note);
    }

}
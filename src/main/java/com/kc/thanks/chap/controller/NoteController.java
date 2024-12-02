package com.kc.thanks.chap.controller;

import com.kc.thanks.chap.dto.requestDTO.NoteWriteRequestDTO;
import com.kc.thanks.chap.dto.responseDTO.ReplyListResponseDTO;
import com.kc.thanks.chap.service.NoteService;
import com.kc.thanks.chap.service.ReplyService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@Slf4j
@RequiredArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @GetMapping("/note")
    public String index(Model model, HttpSession session) {
        log.info("note page로 요청 들어옴!");


        return "chap/note";
    }

    @PostMapping("/note/apply")
    @ResponseBody
    public ResponseEntity<String> noteApply(@RequestBody NoteWriteRequestDTO dto, HttpSession session) {
        log.info("/note/apply으로 요청 들어옴! dto에 담긴 값 : " + dto);
        noteService.save(dto);
        return ResponseEntity.ok("신청 성공");
    }

}
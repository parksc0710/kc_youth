package com.kc.thanks.chap.service;

import com.kc.thanks.chap.common.Page;
import com.kc.thanks.chap.dto.requestDTO.ReplyDeleteRequestDTO;
import com.kc.thanks.chap.dto.responseDTO.ReplyListResponseDTO;
import com.kc.thanks.chap.entity.Reply;
import com.kc.thanks.chap.mapper.ReplyMapper;
import com.kc.thanks.chap.dto.requestDTO.ReplyWriteRequestDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReplyService {
    @Value("${app.masterkey}")
    private String masterKey;
    private final ReplyMapper mapper;

    public void save(ReplyWriteRequestDTO dto) {
        Reply reply = dto.toEntity();
        mapper.saveReply(reply);
    }

    public List<ReplyListResponseDTO> findAll(Page page) {
        log.info("service에 replyList 요청 들어 옴!");
        List<ReplyListResponseDTO> dtoList = new ArrayList<>();
        log.info("page에 들어있는 값: " + page.toString());
        List<Reply> replies = mapper.findAll(page);
        for (Reply reply : replies) {
            ReplyListResponseDTO dto = new ReplyListResponseDTO(reply);
            dtoList.add(dto);
        }
        return dtoList;
    }

    public int countAll() {
        log.info("service에 countAll 요청 들어 옴!");
        return mapper.countAll();
    }

    public boolean isValidPassword(ReplyDeleteRequestDTO dto) {
        // 관리자 마스터 비번으로 삭제인 경우
        if (dto.getPassword().equals(masterKey)) {
            return true;
        }

        // 사용자 직접 삭제인 경우
        String passwordFromDB = mapper.selectPasswordById(dto.getPostId());
        log.info("패스워드 비교 결과: " + passwordFromDB.equals(dto.getPassword()));
        return passwordFromDB.equals(dto.getPassword());
    }

    public boolean deletePost(int postId) {
        try {
            mapper.deletePost(postId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public List<ReplyListResponseDTO> findByName(String name) {
        List<ReplyListResponseDTO> dtoList = new ArrayList<>();
        List<Reply> replies = mapper.selectRepliesByName(name);
        for (Reply reply : replies) {
            ReplyListResponseDTO dto = new ReplyListResponseDTO(reply);
            dtoList.add(dto);
        }
        return dtoList;
    }

}

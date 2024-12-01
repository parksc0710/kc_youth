package com.kc.thanks.chap.controller;

import com.kc.thanks.chap.common.Page;
import com.kc.thanks.chap.common.PageMaker;
import com.kc.thanks.chap.dto.requestDTO.ReplyDeleteRequestDTO;
import com.kc.thanks.chap.dto.requestDTO.ReplyWriteRequestDTO;
import com.kc.thanks.chap.dto.responseDTO.ReplyListResponseDTO;
import com.kc.thanks.chap.service.ReplyService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Controller
@Slf4j
@RequiredArgsConstructor
public class MainController {
    private final ReplyService replyService;

    @GetMapping("/index")
    public String index(Model model, @ModelAttribute("p") Page page, HttpSession session) {
        log.info("index로 요청 들어옴!");
        log.info("pageNo: {}", page.getPageNo());

        // reply list를 요청하는 로직 (페이지 당 12개 보여주기)
        List<ReplyListResponseDTO> replyList = replyService.findAll(page);

        // 전체 reply 갯수를 요청하는 로직
        int replyCount = replyService.countAll();

        // 페이지 버튼 만들기
        PageMaker pageMaker = new PageMaker(page, replyCount);

        model.addAttribute("replyList", replyList);
        model.addAttribute("replyCount", replyCount);
        model.addAttribute("maker", pageMaker);

        return "chap/index";
    }



    @PostMapping("/reply/write")
    public String replyWrite(ReplyWriteRequestDTO dto, HttpSession session) {
        log.info("/reply/write으로 요청 들어옴! dto에 담긴 값 : " + dto);
        replyService.save(dto);

        return "redirect:/index#section4";
    }

    @GetMapping("/reply/{searchName}")
    @ResponseBody
    public ResponseEntity<?> replySearchByName(@PathVariable String searchName) {
        log.info("/reply/{searchName}으로 요청 들어옴! 검색어 : " + searchName);

        List<ReplyListResponseDTO> searchResultList = replyService.findByName(searchName);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("replyList",  searchResultList);
        response.put("replyCount", searchResultList.size());
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @PostMapping("/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> replyDelete(ReplyDeleteRequestDTO dto, HttpSession session) {
        log.info("/delete으로 요청 들어옴! dto에 담긴 값 : " + dto);

        Map<String, Object> response = new HashMap<>();

        // 비밀번호 확인 로직
        if (!replyService.isValidPassword(dto)) {
            log.info("비밀번호가 틀렸다고 알려라~");
            response.put("success", false);
            response.put("message", "비밀번호가 틀렸습니다.");
            return ResponseEntity.ok(response);
        } else {

            // 게시물 삭제 로직
            boolean isDeleted = replyService.deletePost(dto.getPostId());
            if (isDeleted) {
                response.put("success", true);
                response.put("message", "삭제되었습니다.");
                response.put("replyCount", replyService.countAll());
            } else {
                response.put("success", false);
                response.put("message", "게시물 삭제에 실패했습니다. 관리자에게 문의해 주세요.");
            }

            return ResponseEntity.ok(response);
        }
    }
}

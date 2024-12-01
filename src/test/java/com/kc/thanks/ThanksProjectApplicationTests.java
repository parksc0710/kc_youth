package com.kc.thanks;

import com.kc.thanks.chap.dto.requestDTO.ReplyWriteRequestDTO;
import com.kc.thanks.chap.service.ReplyService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
@Rollback(value = false)
class ThanksProjectApplicationTests {
    @Autowired
    ReplyService replyService;

    @Test
    @DisplayName("bulk insert")
    void bulkInsert() {
        for(int i=1; i<=150; i++) {
            replyService.save(
                    ReplyWriteRequestDTO.builder()
                            .name("테스트" + i)
                            .generation("1990")
                            .password("123456")
                            .content("하늘에 계신 우리 아버지여 이름이 거룩히 여김을 받으시오며 " +
                                    "나라에 임하옵시며 뜻이 하늘에서 이루어진 것 같이 땅에서도 이루어지이다.")
                            .build()
            );
        }
    }
}

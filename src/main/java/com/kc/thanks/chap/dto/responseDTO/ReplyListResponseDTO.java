package com.kc.thanks.chap.dto.responseDTO;

import com.kc.thanks.chap.entity.Reply;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@Getter @Setter
@ToString @EqualsAndHashCode
@AllArgsConstructor @NoArgsConstructor
@Builder
@Slf4j
public class ReplyListResponseDTO {
    private int id;
    private String name;
    private String generation;
    private String content;
    private String background;
    private String regDate;

    public ReplyListResponseDTO(Reply reply) {
        this.id = reply.getId();
        this.name = reply.getName();
        this.generation = reply.getGeneration();
        this.content = reply.getContent();
        this.background = reply.getBackground();
        this.regDate = makePrettierDateString(reply.getLocalDateTime());
    }

    // 시간 표기
    public static String makePrettierDateString(LocalDateTime regDate) {

        // 현재 시간
        LocalDateTime currentTime = LocalDateTime.now();

        // 두 시간 사이의 차이 계산
        Duration duration = Duration.between(regDate, currentTime);
        long seconds = duration.toSeconds();
        long minutes = duration.toMinutes();
        long hoursDifference = duration.toHours();

        String time = "";
        if (seconds < 15) {
            time = "방금 전";
        } else if (seconds < 60) {
            time = seconds + "초 전";
        } else if (minutes < 60) {
            time = minutes + "분 전";
        } else if (hoursDifference < 24) {
            time = hoursDifference + "시간 전";
        } else if (hoursDifference < 168) {
            time = duration.toDays() + "일 전";
        } else {
            time = ChronoUnit.WEEKS.between(regDate, currentTime) + "주 전";
        }

        return time;
    }

}


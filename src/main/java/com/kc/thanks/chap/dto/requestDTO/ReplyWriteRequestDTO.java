package com.kc.thanks.chap.dto.requestDTO;

import com.kc.thanks.chap.entity.Reply;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jdk.jfr.Timestamp;
import lombok.*;

import java.time.LocalDateTime;
import java.util.concurrent.ThreadLocalRandom;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyWriteRequestDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String generation;

    @NotBlank
    @Size(min = 1, max = 800)
    private String content;

    @NotBlank
    private String password;

    @NotBlank
    private String background;

    @Timestamp
    @Builder.Default
    private LocalDateTime localDateTime = LocalDateTime.now();

    // ThreadLocalRandom을 사용하여 멀티스레드 환경에서의 안전성 향상
    private static final ThreadLocalRandom random = ThreadLocalRandom.current();

    // Reply 엔티티로 변환하는 메소드
    public Reply toEntity() {
        return Reply.builder()
                .name(this.name)
                .generation(this.generation)
                .content(this.content)
                .password(this.password)
                .background(makeRandomBackground())
                .localDateTime(this.localDateTime)
                .build();
    }

    // bg1, bg2, bg3, bg4, bg5와 같은 랜덤 배경값을 생성하는 메소드
    private String makeRandomBackground() {
        return "bg" + (random.nextInt(5) + 1);
    }
}


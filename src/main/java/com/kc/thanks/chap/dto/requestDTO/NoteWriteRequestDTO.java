package com.kc.thanks.chap.dto.requestDTO;

import com.kc.thanks.chap.entity.Note;
import jakarta.validation.constraints.NotBlank;
import jdk.jfr.Timestamp;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NoteWriteRequestDTO {

    @NotBlank
    private String name;

    @NotBlank
    private String contact;

    @NotBlank
    private int cnt;

    @NotBlank
    private String type;

    @NotBlank
    private String addr;

    @NotBlank
    private String use_yn;

    @NotBlank
    private LocalDateTime reg_dt;

    @NotBlank
    private LocalDateTime chg_dt;

    @Timestamp
    @Builder.Default
    private LocalDateTime localDateTime = LocalDateTime.now();

    public Note toEntity() {
        return Note.builder()
                .name(this.name)
                .contact(this.contact)
                .cnt(this.cnt)
                .type(this.type)
                .addr(this.addr)
                .use_yn(this.use_yn)
                .reg_dt(this.localDateTime)
                .chg_dt(this.localDateTime)
                .build();
    }
}
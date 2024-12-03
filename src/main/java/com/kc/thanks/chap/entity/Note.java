package com.kc.thanks.chap.entity;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Note {
    private String name;
    private String contact;
    private int cnt;
    private String type;
    private String addr;
    private String use_yn;
    private LocalDateTime reg_dt;
    private LocalDateTime chg_dt;
}
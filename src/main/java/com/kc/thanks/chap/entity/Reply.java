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
public class Reply {
    private int id;
    private String name;
    private String generation;
    private String password;
    private String content;
    private LocalDateTime localDateTime;
    private String background;
}

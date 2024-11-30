package com.kc.thanks.chap.dto.requestDTO;

import lombok.*;

@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyDeleteRequestDTO {
    private int postId;
    private String password;
}

package com.kc.thanks.chap.mapper;

import com.kc.thanks.chap.entity.Reply;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface ReplyMapper {
    void saveReply(Reply reply);

    List<Reply> findAll();

    int countAll();

    String selectPasswordById(int postId);

    void deletePost(int postId);

    List<Reply> selectRepliesByName(String name);
}

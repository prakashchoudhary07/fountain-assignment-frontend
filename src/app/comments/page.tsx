"use client";

import Comment from "@/components/comment";
import {
  CommentStoreInterface,
  addComment,
  deleteComment,
} from "@/utils/comments";
import { useState } from "react";

const commentStore: CommentStoreInterface = {
  id: 1,
  items: [],
};

export default function Page() {
  const [commentData, setCommentDate] =
    useState<CommentStoreInterface>(commentStore);

  const handelAddComment = (parentId: number, body: string) => {
    const comments = addComment(commentStore, parentId, body);
    setCommentDate(comments);
  };

  const handelDeleteComment = (commentId: number) => {
    const comments = deleteComment(commentStore, commentId);
    setCommentDate({ ...comments });
  };

  return (
    <div>
      <h1>Nested comments</h1>
      <Comment
        comment={commentData}
        addComment={handelAddComment}
        deleteComment={handelDeleteComment}
      />
    </div>
  );
}

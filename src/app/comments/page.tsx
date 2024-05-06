"use client";

import Comment from "@/components/comment";
import {
  CommentStoreInterface,
  insertComment,
  removeComment,
} from "@/utils/comments";
import { useState } from "react";

const commentStore: CommentStoreInterface = {
  id: 1,
  items: [],
};

export default function Page() {
  const [commentData, setCommentDate] =
    useState<CommentStoreInterface>(commentStore);

  const addComment = (parentId: number, body: string) => {
    const comments = insertComment(commentStore, parentId, body);
    setCommentDate(comments);
  };

  const deleteComment = (commentId: number) => {
    const comments = removeComment(commentStore, commentId);
    setCommentDate({ ...comments });
  };

  return (
    <main className="flex min-h-screen flex-col p-12">
      <h1 className="font-mono text-lg px-4 items-center">
        Nested comments&nbsp;
      </h1>
      <div>
        <Comment
          comment={commentData}
          addComment={addComment}
          deleteComment={deleteComment}
        />
      </div>
    </main>
  );
}

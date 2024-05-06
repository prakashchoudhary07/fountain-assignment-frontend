import { FC, KeyboardEvent, useCallback, useState } from "react";
import InputLabel from "./input-label";
import Action from "./action";
import CommentReply from "./comment-reply";
import CommentBody from "./comment-body";
import { SingleCommentInterface } from "@/utils/comments";

interface CommentProps {
  comment: SingleCommentInterface;
  addComment: (parentId: number, body: string) => void;
  deleteComment: (parentId: number) => void;
}

const Comment: FC<CommentProps> = ({ comment, addComment, deleteComment }) => {
  const [commentInput, setCommentInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handelReplyAction = () => {
    setShowInput(true);
  };

  const handelAddComment = () => {
    if (!commentInput) {
      return;
    }
    addComment(comment.id, commentInput);
    setCommentInput("");
    setShowInput(false);
  };

  const handelDeleteComment = () => {
    deleteComment(comment.id);
  };

  const handelCancelAction = () => {
    setShowInput(false);
  };

  const handelKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handelAddComment();
    } else if (e.key === "Escape") {
      setShowInput(false);
    }
  };

  return (
    <div className="outline outline-1 p-2 m-2">
      {comment.id === 1 ? (
        <>
          <div className="flex items-center">
            <InputLabel
              id="search"
              name="search"
              label="Add comments"
              inputValue={commentInput}
              setInputValue={setCommentInput}
            />
            <Action
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              handelClick={handelAddComment}
              name="Comment"
            />
          </div>
        </>
      ) : (
        <>
          <CommentBody
            comment={comment.body}
            handelReplyAction={handelReplyAction}
            handelDeleteComment={handelDeleteComment}
          />
        </>
      )}
      <div className="p-4">
        {showInput && (
          <div className="flex gap-4">
            <CommentReply
              commentInput={commentInput}
              setCommentInput={setCommentInput}
              handleAddComment={handelAddComment}
              handleCancelAction={handelAddComment}
              handleKeyDown={handelKeyDown}
            />
          </div>
        )}
        {comment.items.map((comment: SingleCommentInterface) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

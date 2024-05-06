import { FC } from "react";
import Action from "./action";

interface CommentReplyProps {
  commentInput: string;
  setCommentInput: (value: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  handleAddComment: () => void;
  handleCancelAction: () => void;
}

const CommentReply: FC<CommentReplyProps> = ({
  commentInput,
  setCommentInput,
  handleKeyDown,
  handleAddComment,
  handleCancelAction,
}) => {
  return (
    <div>
      <input
        className="text-black w-48 h-8 rounded-md p-4 ml-4"
        type="text"
        value={commentInput}
        onChange={(e) => setCommentInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Action
        className="bg-transparent leading-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        handelClick={handleAddComment}
        name="reply"
      />
      <Action
        className="bg-transparent leading-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        handelClick={handleCancelAction}
        name="cancel"
      />
    </div>
  );
};

export default CommentReply;

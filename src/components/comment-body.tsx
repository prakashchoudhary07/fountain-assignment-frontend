import { FC } from "react";
import Action from "./action";

interface CommentBodyProps {
  comment?: string;
  handelReplyAction: () => void;
  handelDeleteComment: () => void;
}

const CommentBody: FC<CommentBodyProps> = ({
  comment,
  handelReplyAction,
  handelDeleteComment,
}) => {
  return (
    <div>
      <div className="block bg-white rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-auto">
        <span>{comment}</span>
      </div>
      <Action
        className="bg-transparent leading-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 m-1 border border-blue-500 hover:border-transparent rounded"
        handelClick={handelReplyAction}
        name="reply"
      />
      <Action
        className="bg-transparent leading-none hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
        handelClick={handelDeleteComment}
        name="delete"
      />
    </div>
  );
};

export default CommentBody;

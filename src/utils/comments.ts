interface SingleCommentInterface {
  id: number;
  body?: string;
  items: SingleCommentInterface[];
}

interface CommentStoreInterface {
  id: number;
  items: SingleCommentInterface[];
}

const addComment = (
  commentStore: CommentStoreInterface,
  parentId: number,
  body: string
): CommentStoreInterface => {
  if (commentStore.id === parentId) {
    commentStore.items.push({
      id: new Date().getTime(),
      body,
      items: [],
    });

    return commentStore;
  }

  let latestComment = [];
  latestComment = commentStore.items.map((ob: SingleCommentInterface) => {
    return addComment(ob, parentId, body);
  });

  return { ...commentStore, items: latestComment };
};

const deleteComment = (
  commentStore: CommentStoreInterface,
  commentId: number
) => {
  for (let i = 0; i < commentStore.items.length; i++) {
    const currentItem = commentStore.items[i];
    if (currentItem.id === commentId) {
      commentStore.items.splice(i, 1);
      return commentStore;
    } else {
      deleteComment(currentItem, commentId);
    }
  }

  return commentStore;
};

export { addComment, deleteComment };
export type { CommentStoreInterface, SingleCommentInterface };

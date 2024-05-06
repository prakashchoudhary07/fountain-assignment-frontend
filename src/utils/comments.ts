interface SingleCommentInterface {
  id: number;
  body?: string;
  items: SingleCommentInterface[];
}

interface CommentStoreInterface {
  id: number;
  items: SingleCommentInterface[];
}

const insertComment = (
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
    return insertComment(ob, parentId, body);
  });

  return { ...commentStore, items: latestComment };
};

const removeComment = (
  commentStore: CommentStoreInterface,
  commentId: number
) => {
  for (let i = 0; i < commentStore.items.length; i++) {
    const currentItem = commentStore.items[i];
    if (currentItem.id === commentId) {
      commentStore.items.splice(i, 1);
      return commentStore;
    } else {
      removeComment(currentItem, commentId);
    }
  }

  return commentStore;
};

export { insertComment, removeComment };
export type { CommentStoreInterface, SingleCommentInterface };

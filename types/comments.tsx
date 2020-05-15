export interface CommentType {
  postId: number;
  id: number;
  body: string;
}

export type CommentsListType = CommentType[] | []
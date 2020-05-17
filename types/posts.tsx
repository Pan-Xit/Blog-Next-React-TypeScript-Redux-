import { CommentsListType } from './comments';

export interface PostType {
  id: number;
  title: string;
  body: string;
  comments: CommentsListType;
  imgUrl?: string;
}

export type PostListType = PostType[] | [];

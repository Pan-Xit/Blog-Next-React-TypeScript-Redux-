import { PostListType } from '../../types/posts';

export const SET_POST_LIST = 'SET_POST_LIST';
type ActionType = typeof SET_POST_LIST;

export interface Action {
  type: ActionType;
  postList?: PostListType
}

export const setPostList = (posts: PostListType): Action => ({
  type: SET_POST_LIST,
  postList: posts,
})

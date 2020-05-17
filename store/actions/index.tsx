// Gateway
import { fetchPost } from '../../gateway/gateway';
// Types
import { PostType } from '../../types/posts';
import { CommentType } from '../../types/comments';

export const SET_POST = 'SET_POST';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS'
type ActionType = typeof SET_POST | typeof UPDATE_COMMENTS;

export interface Action {
  type: ActionType;
  post?: PostType;
  comments?: CommentType[];
}

export const setPost = (post: PostType): Action => ({
  type: SET_POST,
  post,
})

const updateCommentsAction = (comments: CommentType[]): Action => ({
  type: UPDATE_COMMENTS,
  comments,
})

export const updateComments = (postId: number) => {
  return (dispatch) => {
    fetchPost(postId)
      .then(({ comments }) => {
        dispatch(updateCommentsAction(comments))
      })
  }
}
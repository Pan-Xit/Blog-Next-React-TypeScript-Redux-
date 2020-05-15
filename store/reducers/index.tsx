import { SET_POST_LIST } from '../actions';
// Types
import { PostListType } from '../../types/posts';
import { Action } from '../actions';

const initialState: PostListType = [];

const reducer = (state: PostListType = initialState, action: Action): PostListType => {
  switch (action.type) {
    case (SET_POST_LIST):
      debugger
      return action.postList;
    default:
      return state;
  }
}

export default reducer;
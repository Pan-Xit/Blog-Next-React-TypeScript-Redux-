import { SET_POST, UPDATE_COMMENTS } from '../actions';
// Types
import { PostType } from '../../types/posts';
import { Action } from '../actions';

type stateType = PostType | null

const initialState = null;

const reducer = (state: stateType = initialState, action: Action): stateType => {
  switch (action.type) {
    case SET_POST:
      return action.post;
    case UPDATE_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    default:
      return state;
  }
}

export default reducer;
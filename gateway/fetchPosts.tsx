import axios from './axios';
// Types
import { PostListType } from '../types/posts';

interface ServerResponse {
  data: PostListType
}

const fetchPosts = async (): Promise<PostListType> => {
  const res: ServerResponse = await axios.get('')

  return res.data
}

export default fetchPosts;
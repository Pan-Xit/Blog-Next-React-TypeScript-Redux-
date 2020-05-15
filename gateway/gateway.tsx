import axios from './axios';
// Types
import { PostType, PostListType } from '../types/posts';

interface FetchPosts {
  data: PostListType
}

export const fetchPosts = async (): Promise<PostListType> => {
  const res: FetchPosts = await axios.get('posts')

  return res.data
}

interface FetchPost {
  data: PostType
}

export const fetchPost = async (id: number): Promise<PostType> => {
  const res: FetchPost = await axios.get(`posts/${id}?_embed=comments`)

  return res.data
}

export interface postedCommentInterface {
  postId: number;
  body: string;
}

export const postComment = (payload: postedCommentInterface): Promise<any> => {
  return axios.post('comments', payload)
    .then(res => {
      if (res.status !== 201) {
        throw new Error('Failed to connect the server')
      }

      return res
    })
}

export interface newPostInterface {
  title: string;
  body: string;
}

export const createPost = (payload: newPostInterface): Promise<any> => {
  return axios.post('posts', payload)
    .then(res => {
      if (res.status !== 201) {
        throw new Error('Failed to connect the server')
      }

      return res
    })
}
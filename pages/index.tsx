import Head from 'next/head';
// Styles
import styled from 'styled-components';
// Components
import Posts from '../containers/Posts/Posts';
// Gateway
import fetchPosts from '../gateway/fetchPosts';
// Types
import { PostListType } from '../types/posts';

interface Props {
  posts: PostListType;
}

export default function Home({ posts }) {

  return (
    <>
      <Posts posts={posts} />
    </>
  )
}


export async function getServerSideProps(context) {
  const posts = await fetchPosts()

  return {
    props: {
      posts,
    },
  }
}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
// Styles
import styled from 'styled-components';
// Components
import Posts from '../containers/Posts/Posts';
// Gateway
import fetchPosts from '../gateway/fetchPosts';
// Types
import { PostListType } from '../types/posts';
// Store Actions
import { setPostList } from '../store/actions';

interface Props {
  posts: PostListType;
  onSetPostList(posts: PostListType): void;
}

function Home(props) {

  useEffect(
    () => {
      props.onSetPostList(props.posts)
    }, []
  )

  return (
    <>
      <Posts />
    </>
  )
}


export async function getServerSideProps(context) {
  const posts: PostListType = await fetchPosts();

  return {
    props: {
      posts,
    },
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSetPostList: (posts) => dispatch(setPostList(posts))
})

export default connect(null, mapDispatchToProps)(Home);

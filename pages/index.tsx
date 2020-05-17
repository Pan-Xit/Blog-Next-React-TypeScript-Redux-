import React from 'react';
import Head from 'next/head';
// Styles
import styled from 'styled-components';
// Components
import Wrapper from '../containers/Wrapper/Wrapper';
import Posts from '../containers/Posts/Posts';
// Gateway
import { fetchPosts } from '../gateway/gateway';
// Types
import { PostListType } from '../types/posts';

interface Props {
  posts: PostListType;
}

const StyledDiv = styled.div`
  margin: auto;
`

const Home: React.FC<Props> = ({ posts }) => {
  let content: JSX.Element;
  if (posts.length > 0) {
    content = <Posts posts={posts} />
  } else {
    content = <StyledDiv>Ooops it seems this blog is empty :(</StyledDiv>
  }

  return (
    <>
      <Head>
        <title>Simple Blog Main Page</title>
      </Head>
      <Wrapper>
        {content}
      </Wrapper>
    </>
  )
}

export async function getServerSideProps(context) {
  const posts: PostListType = await fetchPosts();

  return {
    props: {
      posts: posts,
    },
  }
}

export default Home;

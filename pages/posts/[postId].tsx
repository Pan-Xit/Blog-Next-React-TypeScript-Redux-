import React, { useState } from 'react';
import { fetchPost } from '../../gateway/gateway';
// Styles
import styled from 'styled-components';
// Components
import Wrapper from '../../containers/Wrapper/Wrapper';
import Comments from '../../containers/Comments/Comments';
// Types
import { PostType } from '../../types/posts';

const StyledH1 = styled.h1`
  text-align: center;
`

const PostPage = ({ post }) => {
  return (
    <Wrapper>
      <StyledH1>{post.title}</StyledH1>
      <div>{post.body}</div>
      <Comments comments={post.comments} postId={post.id} />
    </Wrapper>
  )
}

export async function getServerSideProps({ params, ...rest }) {
  const post: PostType = await fetchPost(params.postId);

  return {
    props: {
      post,
    },
  }
}

export default PostPage;
import React from 'react';
// Components
import Wrapper from '../Wrapper/Wrapper';
import Post from '../../components/Post/Post';
// Styles
import styled from 'styled-components';
// Types
import { PostListType } from '../../types/posts';

interface Props {
  posts: PostListType;
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`

const Posts: React.FC<Props> = ({ posts }) => {
  let content: JSX.Element;
  if (posts) {
    content = (
      <StyledList>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </StyledList>
    )
  } else {
    content = <span>Ooops it seems this blog is empty :(</span>
  }

  return (
    <Wrapper>
      {content}
    </Wrapper>
  )
}

export default Posts;
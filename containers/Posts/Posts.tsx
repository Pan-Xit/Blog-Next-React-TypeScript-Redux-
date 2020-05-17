import React from 'react';
// Components
import Post from '../../components/Post/Post';
// Styles
import styled from 'styled-components';
// Types
import { PostType } from '../../types/posts';


interface Props {
  posts: PostType[];
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const Posts: React.FC<Props> = ({ posts }) => (
  <StyledList>
    {posts.map(post => <Post key={post.id} post={post} />)}
  </StyledList>
)


export default Posts;
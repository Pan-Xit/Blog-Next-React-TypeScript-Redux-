import React from 'react';
import { connect } from 'react-redux';
// Components
import Wrapper from '../Wrapper/Wrapper';
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
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
`

const Posts: React.FC<Props> = ({ posts }) => (
  <StyledList>
    {posts.map(post => <Post key={post.id} post={post} />)}
  </StyledList>
)


export default Posts;
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

const Posts: React.FC<Props> = ({ posts }) => {
  const sortedPosts = posts
    .slice()
    .sort((a, b) => b.id - a.id) // In a reason we don`t have Date in the Post data, made sorting posts by id (id is an increment, so newest posts have bigger id)

  return (
    <StyledList>
      {sortedPosts.map(post => <Post key={post.id} post={post} />)}
    </StyledList>
  )
}


export default Posts;
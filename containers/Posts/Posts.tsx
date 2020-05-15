import React from 'react';
import { connect } from 'react-redux';
// Components
import Wrapper from '../Wrapper/Wrapper';
import Post from '../../components/Post/Post';
// Styles
import styled from 'styled-components';
// Types
import { PostListType, PostType } from '../../types/posts';

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
  console.log(posts)

  let content: JSX.Element;
  if (posts.length > 0) {
    content = (
      <StyledList>
        {(posts as PostType[]).map(post => <Post key={post.id} post={post} />)}
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

const mapStateToProps = (state) => ({
  posts: state
})

export default connect(mapStateToProps)(Posts);
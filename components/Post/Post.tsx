// Implement pagination (max posts on page == 10)

import React from 'react';
// Styles
import styled from 'styled-components';
// Types
import { PostType } from '../../types/posts';

interface Props {
  post: PostType
}

const StyledLi = styled.li`
  margin: 8px;
  width: 40%;
  flex-grow: 1;
  display: flex;
  padding: 8px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #ccc;

  &:hover {
    background-color: #ddd;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #bbb;
  }
`

const PostImg = styled.figure`
  width: 100px;

  img {
    max-width: 100%;
  }
`

const Post:React.FC<Props> = ({ post }) => {
  const postImgSrc = post.imgUrl ? post.imgUrl : '/defaultPostPreview.svg'

  return (
    <StyledLi>
      <PostImg>
        <img src={postImgSrc} alt={`Preview for post ${post.id}`} />
      </PostImg>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </StyledLi>
  )
}

export default Post;
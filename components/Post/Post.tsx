import React from 'react';
import Link from 'next/link';
// Styles
import styled from 'styled-components';
// Types
import { PostType } from '../../types/posts';


interface Props {
  post: PostType
}

const StyledLi = styled.li`
  margin: 8px;
  flex-grow: 1;

  @media screen and (min-width: 700px) {
    width: 40%;
  }
`

const PostImg = styled.figure`
  width: 30%;
  max-width: 100px;

  img {
    max-width: 100%;
  }
`

const PostContent = styled.div`
  width: 70%;

  h3 {
    height: 30%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    margin: 0;
    height: 35%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const StyledA = styled.a`
  display: flex;
  height: 150px;
  padding: 8px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #ccc;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #bbb;
  }
`

const Post:React.FC<Props> = ({ post }) => {
  const postImgSrc = post.imgUrl ? post.imgUrl : '/defaultPostPreview.svg'

  return (
    <StyledLi>
      <Link href={`/posts/${post.id}`} passHref>
        <StyledA>
          <PostImg>
            <img src={postImgSrc} alt={`Preview for post ${post.id}`} />
          </PostImg>
          <PostContent>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </PostContent>
        </StyledA>
      </Link>
    </StyledLi>
  )
}

export default Post;
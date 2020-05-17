import React from 'react';
// Styles
import styled from 'styled-components';
// Components
import Comment from '../../components/Comment/Comment';
import CommentForm from '../../components/Comment/CommentForm';
// Types
import { CommentsListType, CommentType } from '../../types/comments';


interface Props {
  comments: CommentsListType;
  postId: number;
}

const StyledComments = styled.div`
  width: 80%;
  align-self: center;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`

const StyledDiv = styled.div`
  text-align: center;
`

const StyledH3 = styled.h3`
  margin-top: 50px;
  text-align: center;
`

const Comments: React.FC<Props> = ({ comments, postId }) => {
  let content: JSX.Element[] | JSX.Element;
  if (comments.length > 0) {
    content = (
      <StyledList>
        {(comments as CommentType[])
          .map((comment) => <Comment key={comment.id} comment={comment} />)}
      </StyledList>
    )
      
  } else {
    content = <StyledDiv>No one commented on this post yet.</StyledDiv>
  }

  return (
    <StyledComments>
      <StyledH3>Comments</StyledH3>
        {content}
      <CommentForm postId={postId} />
    </StyledComments>
  )
}

export default Comments;
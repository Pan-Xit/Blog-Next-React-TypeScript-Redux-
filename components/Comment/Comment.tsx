import React from 'react';
// Styles
import styled from 'styled-components';
// Types
import { CommentType } from '../../types/comments';


interface Props {
  comment: CommentType;
}

const StyledLi = styled.li`
  margin: 8px;
  min-height: 50px;
  padding: 8px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 1px #ccc;
`

const Comment: React.FC<Props> = ({ comment }) => (
  <StyledLi>
    {comment.body}
  </StyledLi>
)

export default Comment;
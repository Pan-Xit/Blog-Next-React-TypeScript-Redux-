import React, { useRef } from 'react';
import Router from 'next/router'
// Styles
import styled from 'styled-components';
// Gateway
import { postComment } from '../../gateway/gateway';
// Types
import { postedCommentInterface } from '../../gateway/gateway';


interface Props {
  postId: number;
}

const StyledForm = styled.form`
  margin-top: 50px;
  display: flex;
  align-items: center;


  textarea {
    width: 80%;
    height: 50px;
  };

  button {
    margin-left: auto;
    padding: 8px;
  }
`

const NewComment: React.FC<Props> = ({ postId }) => {
  const textAreaEl = useRef(null);

  const onSubmitHandler = (e: any): void => {
    e.preventDefault()

    const comment = textAreaEl.current.value;
    if (comment === '') return;

    const payload: postedCommentInterface = {
      postId,
      body: comment
    }

    postComment(payload)
      .then(res => { Router.push(`/posts/${postId}`) })
  }

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <textarea ref={textAreaEl} />
      <button type="submit">Comment</button>
    </StyledForm>
  )
}

export default NewComment;
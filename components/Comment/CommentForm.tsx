import React, { useRef } from 'react';
import { connect } from 'react-redux';
// Styles
import styled from 'styled-components';
// Gateway
import { postComment } from '../../gateway/gateway';
// Store
import { updateComments } from '../../store/actions';
// Types
import { postedCommentInterface } from '../../gateway/gateway';


interface Props {
  postId: number;
  onUpdateComments(postId: number): void;
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

const NewComment: React.FC<Props> = ({ postId, onUpdateComments }) => {
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
      .then(res => {
        textAreaEl.current.value = ''
        onUpdateComments(postId);
      })
  }

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <textarea ref={textAreaEl} />
      <button type="submit">Comment</button>
    </StyledForm>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onUpdateComments: (postId: number) => dispatch(updateComments(postId))
})

export default connect(null, mapDispatchToProps)(NewComment);
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
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;


  textarea {
    width: 100%;
    height: 50px;
  };

  button {
    margin-top: 15px;
    padding: 8px;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;

    textarea {
      width: 80%;
      margin-right: 15px;
    };
  
    button {
      margin: 0 0 0 auto;
    }
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
import React, { useState } from 'react';
import Router from 'next/router';
// Styles
import styled from 'styled-components';
// Components
import Wrapper from '../containers/Wrapper/Wrapper';
// Gateway
import { createPost } from '../gateway/gateway';
// Types
import { newPostInterface } from '../gateway/gateway';
 

const StyledH1 = styled.h1`
  text-align: center;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  h3 {
    text-align: center;
  }

  input {
    text-align: center;
  }

  textarea {
    min-height: 100px;
  }

  button {
    width: 200px;
    padding: 8px;
    margin: 15px auto;
  }
`

const CreateNewPostPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const onInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
  }

  const onTextAreaChange = (e) => {
    const newTextAreaValue = e.target.value;
    setTextAreaValue(newTextAreaValue);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const payload: newPostInterface = {
      title: inputValue,
      body: textAreaValue,
    }

    createPost(payload)
      .then(res => Router.push('/'))
  }

  return (
    <Wrapper>
      <StyledH1>Create post</StyledH1>
      <StyledForm onSubmit={onSubmitHandler}>
        <label>
          <h3>Title</h3>
          <input type="text" onChange={onInputChange} value={inputValue} required/>
        </label>
        <label>
          <h3>Text</h3>
          <textarea onChange={onTextAreaChange} value={textAreaValue} required/>
        </label>
        <button type="submit">Create Post</button>
      </StyledForm>
    </Wrapper>
  )
}

export default CreateNewPostPage;
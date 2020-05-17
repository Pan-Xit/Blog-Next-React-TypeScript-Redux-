import React from 'react';
import styled from 'styled-components';


const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
`

const StyledDescription = styled.span`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
`

const Title: React.FC = () => {
  return (
    <StyledTitle>
      <span>Simple Blog</span>
      <StyledDescription>Very simple but cool blog</StyledDescription>
    </StyledTitle>
  )
}

export default Title;
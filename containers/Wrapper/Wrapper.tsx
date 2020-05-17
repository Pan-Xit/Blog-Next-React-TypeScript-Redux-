import React from 'react';
import styled from 'styled-components';


interface Props {
  children: JSX.Element | JSX.Element[];
  row?: boolean;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${ (props) => props.row ? "row" : "column" };
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 500px) and (max-width: 699px) {
    width: 90%;
  }

  @media screen and (min-width: 700px) {
    max-width: 1140px;
    width: 80%;
  }
`

const Wrapper: React.FC<Props> = (props) => {
  return (
    <StyledWrapper row={props.row}>
      {props.children}
    </StyledWrapper>
  )
}

export default Wrapper;
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element | JSX.Element[];
  row?: boolean;
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: ${ (props) => props.row ? "row" : "column" };
  max-width: 1140px;
  width: 80%;
  margin: auto;
`

const Wrapper: React.FC<Props> = (props) => {
  return (
    <StyledWrapper row={props.row}>
      {props.children}
    </StyledWrapper>
  )
}

export default Wrapper;
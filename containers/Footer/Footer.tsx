import React from 'react';
import styled from 'styled-components';
// Component
import Wrapper from '../Wrapper/Wrapper';

const StyledFooter = styled.footer`
  margin-top: auto;
  display: flex;
  align-items: center;
  height: 150px;
  background: linear-gradient(90deg, #fff, #ccc 80%);
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <span>Nice footer</span>
        <span>&</span>
        <span>Awesome social links</span>
      </Wrapper>
    </StyledFooter>
  )
}

export default Footer;
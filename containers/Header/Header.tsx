import React from 'react';
import styled from 'styled-components';
// Components
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../components/Logo/Logo';
import Title from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';


const StyledHeader = styled.header`
  background: linear-gradient(90deg, #fff, #ccc 80%);
  height: 250px;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper row>
        <Logo />
        <Nav />
      </Wrapper>
      <Title />
    </StyledHeader>
  )
}

export default Header;
import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const StyledNav = styled.nav`
  margin: 30px 0 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 20%;

  a {
    color: #000;
    text-decoration: none;
  }

  a: hover {
    color: #4169E1;
  }
`

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Link href="/"><a>Home</a></Link>
      <Link href="#"><a>Create Post</a></Link>
    </StyledNav>
  )
}

export default Nav;
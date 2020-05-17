import React from 'react';
import styled from 'styled-components';


const StyledLogo = styled.div`
  width: 100px;
`

const StyledImg = styled.img`
  max-width: 100%;
`

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <StyledImg src="/testLogo.svg" alt="Simple Test Logo" />
    </StyledLogo>
  )
}

export default Logo;

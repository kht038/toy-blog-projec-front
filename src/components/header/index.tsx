import React from 'react';
import styled from 'styled-components';
import NavMenu from '../navMenu';

interface Iheader {
  theme: object,
}

const Header: React.FC<Iheader> = ({ theme }) => {
  const StyledHeader = styled.div<Iheader>`
    background-color: ${(props) => props.theme.mainColor};
    height: 70px;
  `;
  return (
    <StyledHeader theme={theme}>
      <NavMenu blogHref="블로그" />
    </StyledHeader>
  );
};

export default Header;

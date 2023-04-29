import React from 'react';
import styled from 'styled-components';
import NavMenu from '../navMenu';
import Logo from '../logo';

interface Iheader {
  theme: object,
}

const Header: React.FC<Iheader> = ({ theme }) => {
  const StyledHeader = styled.div<Iheader>`
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.mainColor};
    padding: 20px;
  `;
  return (
    <StyledHeader theme={theme}>
      <Logo text="KTH" theme={theme} />
      <NavMenu blogHref="blog" theme={theme} />
    </StyledHeader>
  );
};

export default Header;

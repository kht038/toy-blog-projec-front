import React from 'react';
import styled from 'styled-components';

interface ILogo {
  text: string,
  theme: object,
}

const NavMenu: React.FC<ILogo> = ({ text }) => {
  const StyledA = styled.a`
    display: flex;
    font-size: ${(props) => props.theme.fontMedium};
    font-weigth: 400;
    text-decoration: none;
    color: ${(props) => props.theme.menuColor};
  `;
  return (
    <StyledA href="/">{text}</StyledA>
  );
};

export default NavMenu;

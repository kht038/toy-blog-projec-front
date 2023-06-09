import React from 'react';
import styled from 'styled-components';

interface Inav {
  blogHref: string,
  theme: object,
}

const NavMenu: React.FC<Inav> = ({ blogHref }) => {
  const NavMenuDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const StyledA = styled.a`
    display: flex;
    font-size: ${(props) => props.theme.fontMedium};
    font-weigth: 400;
    color: ${(props) => props.theme.menuColor};
  `;
  return (
    <NavMenuDiv>
      <StyledA>{blogHref}</StyledA>
    </NavMenuDiv>
  );
};

export default NavMenu;

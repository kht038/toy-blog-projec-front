import React from 'react';
import styled from 'styled-components';

interface Inav {
  blogHref: string
}

const NavMenu: React.FC<Inav> = ({ blogHref }) => {
  const NavMenuDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 20px;
    margin: 0px;
  `;
  const StyledA = styled.a`
    font-size: 16px;
    font-weigth: 400;
  `;
  return (
    <NavMenuDiv>
      <StyledA>{blogHref}</StyledA>
    </NavMenuDiv>
  );
};

export default NavMenu;

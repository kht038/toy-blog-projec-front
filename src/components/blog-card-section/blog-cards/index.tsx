import React from 'react';
import styled from 'styled-components';

interface IBlogCardView {
  theme: object,
  title: string,
  breif: string,
  // thumbnail: File,
}

const BlogCards: React.FC<IBlogCardView> = ({ theme, title, breif }) => {
  const StyledBlogCards = styled.div<IBlogCardView>`
    display: flex;
    justify-content: flex-start;
    background-color: ${(props) => props.theme.mainColor};
    flex-direction: column;
    align-items: center;
    max-width: 256px;
    width: 256px;
    flex-wrap: wrap;
    gap: 20px;
  `;
  const StyledA = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledA href={`article/${title}`}>
      <StyledBlogCards theme={theme} title={title} breif={breif}>
        <img src="https://source.unsplash.com/user/c_v_r/100x100" alt="test" />
        <h1>{title}</h1>
        <p>{breif}</p>
      </StyledBlogCards>
    </StyledA>
  );
};

export default BlogCards;

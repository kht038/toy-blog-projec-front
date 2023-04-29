import React from 'react';
import styled from 'styled-components';
import BlogCards from './blog-cards/index';

interface IBlogCardBody {
  theme: object,
}

const BlogCardSection: React.FC<IBlogCardBody> = ({ theme }) => {
  const CardBody = styled.div<IBlogCardBody>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 84px;
    background-color: ${(props) => props.theme.bodyColorWhite};
  `;
  const CardWrapper = styled.div`
    max-width: 1176px;
    width: 100%;
    display: flex;
    margin: 0 auto;
  `;

  return (
    <CardBody theme={theme}>
      <CardWrapper>
        <BlogCards theme={theme} title="테스트타이틀" breif="테스트요약글" />
        <BlogCards theme={theme} title="테스트타이틀" breif="테스트요약글" />
        <BlogCards theme={theme} title="테스트타이틀" breif="테스트요약글" />
      </CardWrapper>
    </CardBody>
  );
};

export default BlogCardSection;

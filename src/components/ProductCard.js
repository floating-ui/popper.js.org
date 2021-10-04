import React from 'react';
import styled from '@emotion/styled';

import Img from 'gatsby-image';

const Grid = styled.div`
  position: relative;
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  flex: 0 0 33.3333333333%;
  padding: 20px;
  transition: transform 0.4s ease-out;

  a {
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled(Img)`
  width: 100%;
  border-radius: 5px;
  box-shadow: 1.7px 1.7px 14.1px rgba(0, 0, 0, 0.065),
    5.6px 5.6px 23.3px rgba(0, 0, 0, 0.095), 25px 25px 40px rgba(0, 0, 0, 0.16);

  transition: 0.1s ease;
`;

const Title = styled.div`
  margin-top: 15px;
`;

const Description = styled.div`
  font-size: 12px;
`;

const ProductCard = ({ title, fluid, description, url, data }) => (
  <Container>
    <a href={url} target="_blank" rel="sponsored noopener noreferrer">
      <Image fluid={fluid} alt={title} />
    </a>
    <Title>
      <a href={url} target="_blank" rel="sponsored noopener noreferrer">
        {title}
      </a>
    </Title>
    <Description>{description}</Description>
  </Container>
);

export { ProductCard, Grid };

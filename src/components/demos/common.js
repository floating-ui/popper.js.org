import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ExampleArea } from '../Landing';

const ClippingParentStyled = styled(ExampleArea)`
  overflow-y: scroll;
  height: 350px;
  margin: 0 auto;
  border: 2px dashed #ff6b81;
  background-color: #281e36;

  ${props =>
    props.scrollable &&
    css`
      &::before {
        content: '';
        display: block;
        height: 400px;
      }

      &::after {
        content: '';
        display: block;
        height: 550px;
      }
    `}
`;

export const Reference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: #b886fd;
  border: 2px solid #b886fd;
  color: black;
  font-weight: bold;
`;

export const ClippingParent = props => {
  const scrollRef = useRef();

  useLayoutEffect(() => {
    scrollRef.current.scrollTop = 300;
  }, []);

  return <ClippingParentStyled ref={scrollRef} {...props} />;
};

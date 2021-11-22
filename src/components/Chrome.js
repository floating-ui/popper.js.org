import React, { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Dot = styled.div`
  position: relative;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
`;

const Box = styled.div`
  position: relative;
  background: ${(props) => (props.dark ? '#281e36' : '#fff')};
  border-radius: 8px;
  height: 400px;
  color: black;
  padding-top: 40px;
  overflow: hidden;
`;

export const Chrome = ({ children, dark, center, scrollable }) => {
  const scrollableRef = useRef();

  useLayoutEffect(() => {
    if (scrollable) {
      scrollableRef.current.scrollTop = 350;
    }
  }, [scrollable]);

  return (
    <Box dark={dark}>
      <div
        css={css`
          position: absolute;
          width: 100%;
          display: flex;
          gap: 8px;
          background-color: ${dark ? '#1c1428' : '#eee'};
          padding: 12px;
          z-index: 1;
          top: 0;
        `}
      >
        <Dot color="#ec695e" />
        <Dot color="#f4bf4f" />
        <Dot color="#61c653" />
      </div>
      <div
        ref={scrollableRef}
        css={css`
          padding: 15px;
          position: relative;
          overflow: hidden;
          height: 100%;
          overflow: hidden;

          ${
            center &&
            css`
              display: grid;
              place-items: center;

              > * {
                margin-top: -75px;
              }
            `
          }

          ${
            scrollable &&
            css`
              overflow: scroll;

              &::before {
                content: '';
                display: block;
                width: 1px;
                height: 500px;
              }

              &::after {
                content: '';
                display: block;
                width: 1px;
                height: 500px;
              }
            `
          }}
        `}
      >
        {children}
      </div>
    </Box>
  );
};

import React from 'react';
import { css } from '@emotion/core';
import { usePopper, Tooltip } from '../../Popper';
import { ClippingParent, Reference } from '../common';

export const PreventOverflowDemo = () => {
  const { reference, popper } = usePopper();

  return (
    <>
      <ClippingParent>
        <Reference
          ref={reference}
          css={css`
            position: absolute;
            top: 10px;
            left: 10px;
          `}
        >
          Reference
        </Reference>
        <Tooltip ref={popper}>Tooltip wider than its reference</Tooltip>
      </ClippingParent>
    </>
  );
};

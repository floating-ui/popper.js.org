import React from 'react';
import { css } from '@emotion/core';
import { usePopper, Tooltip } from '../../Popper';
import { ClippingParent, Reference } from '../common';

export const HideDemo = () => {
  const { reference, popper } = usePopper();

  return (
    <>
      <ClippingParent scrollable>
        <Reference
          ref={reference}
          css={css`
            position: absolute;
            left: 50%;
            margin-left: -75px;
          `}
        >
          Reference
        </Reference>
      </ClippingParent>
      <Tooltip ref={popper} hide>
        Tooltip
      </Tooltip>
    </>
  );
};

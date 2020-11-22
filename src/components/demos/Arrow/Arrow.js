import React, { useState } from 'react';
import { css } from '@emotion/core';
import { usePopper, Tooltip, Arrow } from '../../Popper';
import { ClippingParent, Reference } from '../common';

export const ArrowDemo = () => {
  const [hide, setHide] = useState(false);
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      {
        name: 'applyArrowHide',
        enabled: true,
        phase: 'write',
        fn({ state }) {
          setHide(state.modifiersData.arrow.centerOffset !== 0);
        },
      },
      {
        name: 'preventOverflow',
        options: {
          tetherOffset: () => (hide ? -16 : 0),
        },
      },
    ],
  });

  return (
    <>
      <ClippingParent scrollable>
        <Reference
          ref={reference}
          css={css`
            position: absolute;
            left: 15px;
          `}
        >
          Reference
        </Reference>
        <Tooltip ref={popper}>
          <div
            css={css`
              display: grid;
              place-items: center;
              height: 200px;
              width: 100px;
            `}
          ></div>
          <Arrow
            data-popper-arrow
            css={css`
              &::before {
                transition: transform 0.2s ease-out, visibility 0.2s ease-out;
                visibility: ${hide ? 'hidden' : 'visible'};
                transform: translateX(${hide ? 10 : 0}px) rotate(45deg);
                transform-origin: center;
              }
            `}
          />
        </Tooltip>
      </ClippingParent>
    </>
  );
};

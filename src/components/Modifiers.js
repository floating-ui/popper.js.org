import React, { useState } from 'react';
import { usePopper } from './Popper';
import { Chrome } from './Chrome';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { createPortal } from 'react-dom';

const Reference = styled.div`
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  border: 2px dashed;
  color: #4edee5;
`;

const Popper = styled.div`
  display: grid;
  place-items: center;
  width: ${(props) => `${props.width ?? 200}px`};
  height: ${(props) => `${props.height ?? 75}px`};
  border: 2px dashed;
  color: #ffe69d;
`;

const ArrowDiv = styled.div`
  width: 15px;
  height: 15px;
  background: #c83b50;
  top: 0;
`;

export const Offset = () => {
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: false },
      { name: 'offset', options: { offset: [0, 10] } },
    ],
  });

  return (
    <Chrome dark center>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper}>Pop</Popper>
    </Chrome>
  );
};

export const Shift = () => {
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      {
        name: 'preventOverflow',
        enabled: true,
        options: { rootBoundary: 'document', tether: false },
      },
      { name: 'offset', enabled: false },
    ],
  });

  return (
    <Chrome center dark scrollable>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper} width={100} height={250}>
        Pop
      </Popper>
    </Chrome>
  );
};

export const LimitShift = () => {
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      {
        name: 'preventOverflow',
        enabled: true,
        options: { rootBoundary: 'document', tether: true },
      },
      { name: 'offset', enabled: false },
    ],
  });

  return (
    <Chrome center dark scrollable>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper} width={100} height={250}>
        Pop
      </Popper>
    </Chrome>
  );
};

export const Flip = () => {
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', enabled: false },
      { name: 'offset', enabled: false },
      { name: 'flip', enabled: true },
    ],
  });

  return (
    <Chrome dark center scrollable>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper}>Pop</Popper>
    </Chrome>
  );
};

export const Arrow = () => {
  const [arrow, setArrow] = useState(null);

  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', enabled: false },
      { name: 'offset', enabled: false },
      { name: 'flip', enabled: true },
      { name: 'arrow', element: arrow },
    ],
  });

  return (
    <Chrome dark center>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper}>
        Pop
        <ArrowDiv ref={setArrow} data-popper-arrow />
      </Popper>
    </Chrome>
  );
};

export const Hide = () => {
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', enabled: false },
      { name: 'offset', enabled: false },
      { name: 'flip', enabled: true },
    ],
  });

  return (
    <Chrome dark center scrollable>
      <Reference ref={reference}>Ref</Reference>
      {createPortal(
        <Popper
          ref={popper}
          css={css`
            &[data-popper-reference-hidden] {
              visibility: hidden !important;
            }

            &[data-popper-escaped] {
              opacity: 0.5 !important;
            }
          `}
        >
          Pop
        </Popper>,
        document.body
      )}
    </Chrome>
  );
};

// TODO: implement using the new `size` modifier.
export const Size = () => {
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', enabled: false },
      { name: 'offset', enabled: false },
      { name: 'flip', enabled: true },
    ],
  });

  return (
    <Chrome dark center scrollable>
      <Reference ref={reference}>Ref</Reference>
      <Popper ref={popper} height={300} width={150}>
        Pop
      </Popper>
    </Chrome>
  );
};

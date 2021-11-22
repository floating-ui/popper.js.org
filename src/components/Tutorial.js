import React, { useState, forwardRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { usePopper } from './Popper';
import { Chrome } from './Chrome';

let id = 0;
function getId() {
  return ++id;
}

const Button = styled.button`
  all: unset;
  font-size: 125%;
  padding: 10px;
  background-color: #1a65db;
  color: white;
  cursor: pointer;
  user-select: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px rgb(255, 255, 255), 0 0 0 4px rgba(255, 0, 0, 1);
  }
`;

const Tooltip = forwardRef((props, ref) => (
  <div
    {...props}
    ref={ref}
    role="tooltip"
    css={css`
      background: #333;
      color: white;
      font-weight: bold;
      padding: 5px;
    `}
  />
));

const Arrow = styled.div`
  top: -4px;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #333;
    transform: rotate(45deg);
  }
`;

const useId = () => useState(() => `tooltip-${getId()}`)[0];

export const Result1 = () => {
  const id = useId();

  return (
    <Chrome>
      <button aria-describedby={id}>My button</button>
      <div id={id} role="tooltip">
        My tooltip
      </div>
    </Chrome>
  );
};

export const Result2 = () => {
  const id = useId();

  return (
    <Chrome>
      <Button aria-describedby={id}>My button</Button>
      <Tooltip id={id}>Tooltip</Tooltip>
    </Chrome>
  );
};

export const Result3 = () => {
  const id = useId();

  return (
    <Chrome>
      <Button aria-describedby={id}>My button</Button>
      <Tooltip style={{ position: 'absolute' }} id={id}>
        My tooltip
      </Tooltip>
    </Chrome>
  );
};

export const Result4 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: false },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip
      </Tooltip>
    </Chrome>
  );
};

export const Result5 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: false },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip
      </Tooltip>
    </Chrome>
  );
};

export const Result6 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: false },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip
      </Tooltip>
    </Chrome>
  );
};

export const Result7 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: true, options: { rootBoundary: 'document' } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip
      </Tooltip>
    </Chrome>
  );
};

export const Result8 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: false },
      { name: 'flip', enabled: true, options: { rootBoundary: 'document' } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
      </Tooltip>
    </Chrome>
  );
};

export const Result9 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: true },
      { name: 'flip', enabled: true, options: { rootBoundary: 'document' } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
      </Tooltip>
    </Chrome>
  );
};

export const Result10 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'offset', enabled: false },
      { name: 'preventOverflow', enabled: true, options: { padding: 5 } },
      { name: 'flip', enabled: true, options: { rootBoundary: 'document' } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
      </Tooltip>
    </Chrome>
  );
};

export const Result11 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'preventOverflow', options: { padding: 5 } },
      { name: 'flip', options: { rootBoundary: 'document' } },
      { name: 'offset', options: { offset: [0, 5] } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
      </Tooltip>
    </Chrome>
  );
};

export const Result12 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'top',
    modifiers: [
      { name: 'preventOverflow', options: { padding: 5 } },
      { name: 'flip', options: { rootBoundary: 'document' } },
      { name: 'offset', options: { offset: [0, 5] } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
        <Arrow data-popper-arrow />
      </Tooltip>
    </Chrome>
  );
};

export const Result13 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      { name: 'preventOverflow', options: { padding: 5 } },
      { name: 'flip', options: { rootBoundary: 'document' } },
      { name: 'offset', options: { offset: [0, 5] } },
    ],
  });

  return (
    <Chrome>
      <Button ref={reference} aria-describedby={id}>
        My button
      </Button>
      <Tooltip ref={popper} id={id}>
        My tooltip with more content inside
        <Arrow data-popper-arrow />
      </Tooltip>
    </Chrome>
  );
};

export const Result14 = () => {
  const id = useId();
  const { reference, popper } = usePopper({
    modifiers: [
      { name: 'preventOverflow', options: { padding: 5 } },
      { name: 'flip', options: { rootBoundary: 'document' } },
      { name: 'offset', options: { offset: [0, 5] } },
    ],
  });
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(true);
  };

  const onHide = () => {
    setShow(false);
  };

  return (
    <Chrome>
      <Button
        ref={reference}
        aria-describedby={id}
        onMouseEnter={onShow}
        onFocus={onShow}
        onMouseLeave={onHide}
        onBlur={onHide}
      >
        My button
      </Button>
      {show && (
        <Tooltip ref={popper} id={id}>
          My tooltip with more content inside
          <Arrow data-popper-arrow />
        </Tooltip>
      )}
    </Chrome>
  );
};

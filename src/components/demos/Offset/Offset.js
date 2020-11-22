import React from 'react';
import { usePopper, Tooltip } from '../../Popper';
import { Reference } from '../common';

export const OffsetDemo = ({ offset }) => {
  const { reference, popper } = usePopper({
    placement: 'right',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset,
        },
      },
    ],
  });

  return (
    <>
      <Reference ref={reference}>Reference</Reference>
      <Tooltip ref={popper}>Tooltip</Tooltip>
    </>
  );
};

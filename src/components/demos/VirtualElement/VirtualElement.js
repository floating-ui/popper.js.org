import React, { useLayoutEffect } from 'react';
import { usePopper, Tooltip } from '../../Popper';
import { ClippingParent } from '../common';

export const VirtualElementDemo = () => {
  const { reference, popper, instance } = usePopper({
    placement: 'right-start',
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
      {
        name: 'preventOverflow',
        options: {
          tether: false,
          altAxis: true,
        },
      },
    ],
  });

  if (!reference.current) {
    reference.current = {
      getBoundingClientRect: generateGetBoundingClientRect(),
    };
  }

  function generateGetBoundingClientRect(x = 0, y = 0) {
    return () => ({
      width: 0,
      height: 0,
      top: y,
      right: x,
      bottom: y,
      left: x,
    });
  }

  function handleMouseMove({ clientX: x, clientY: y }) {
    const getBoundingClientRect = generateGetBoundingClientRect(x, y);
    reference.current.getBoundingClientRect = getBoundingClientRect;
    instance.current.update();
  }

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <ClippingParent scrollable>
      <Tooltip ref={popper}>Tooltip</Tooltip>
    </ClippingParent>
  );
};

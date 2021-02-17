import { createPopper } from '@popperjs/core';
import './styles.css';

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

createPopper(popcorn, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

document.querySelector('#container').scrollTop = 520;

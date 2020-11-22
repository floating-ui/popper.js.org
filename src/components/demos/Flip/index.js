import React from 'react';
import ReactDOM from 'react-dom';
import { FlipDemo } from './Flip';

if ('document' in global) {
  ReactDOM.render(<FlipDemo />, document.querySelector('#root'));
}

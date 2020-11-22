import React from 'react';
import ReactDOM from 'react-dom';
import { PreventOverflow } from './PreventOverflow';

if ('document' in global) {
  ReactDOM.render(<PreventOverflow />, document.querySelector('#root'));
}

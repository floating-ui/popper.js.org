import React from 'react';
import ReactDOM from 'react-dom';
import { ArrowDemo } from './Arrow';

if ('document' in global) {
  ReactDOM.render(<ArrowDemo />, document.querySelector('#root'));
}

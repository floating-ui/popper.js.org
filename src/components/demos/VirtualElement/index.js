import React from 'react';
import ReactDOM from 'react-dom';
import { VirtualElement } from './VirtualElement';

if ('document' in global) {
  ReactDOM.render(<VirtualElement />, document.querySelector('#root'));
}

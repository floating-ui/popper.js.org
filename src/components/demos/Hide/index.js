import React from 'react';
import ReactDOM from 'react-dom';
import { HideDemo } from './Hide';

if ('document' in global) {
  ReactDOM.render(<HideDemo />, document.querySelector('#root'));
}

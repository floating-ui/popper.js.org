import React from 'react';
import ReactDOM from 'react-dom';
import { OffsetDemo } from './Offset';

if ('document' in global) {
  ReactDOM.render(<OffsetDemo />, document.querySelector('#root'));
}

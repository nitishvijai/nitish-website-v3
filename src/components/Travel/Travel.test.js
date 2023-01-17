import React from 'react';
import ReactDOM from 'react-dom';
import Travel from './Travel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Travel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
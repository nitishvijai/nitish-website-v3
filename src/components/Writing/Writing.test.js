import React from 'react';
import ReactDOM from 'react-dom';
import Writing from './Writing';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Writing />, div);
  ReactDOM.unmountComponentAtNode(div);
});
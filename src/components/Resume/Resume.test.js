import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Resume />, div);
  ReactDOM.unmountComponentAtNode(div);
});
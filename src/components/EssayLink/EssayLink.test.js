import React from 'react';
import ReactDOM from 'react-dom';
import EssayLink from './EssayLink';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EssayLink />, div);
  ReactDOM.unmountComponentAtNode(div);
});
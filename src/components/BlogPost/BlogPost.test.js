import React from 'react';
import ReactDOM from 'react-dom';
import BlogPost from './BlogPost';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPost />, div);
  ReactDOM.unmountComponentAtNode(div);
});
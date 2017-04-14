import React from 'react';
import ReactDOM from 'react-dom';
import Careers from './Careers/Careers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Careers />, div);
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('App rendering', () => {
  render(<App />);

  const header = screen.getByText('Hello World');
  const button = screen.getByText('Click me!');

  userEvent.click(button);

  expect(header).toBeInTheDocument();
  expect(button).toBeDisabled();
});

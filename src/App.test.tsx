import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Hello, world!', () => {
  render(<App />);
  const textElement = screen.getByText(/Setup test/i);
  expect(textElement).toBeInTheDocument();
});
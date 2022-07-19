import { render, screen } from '@testing-library/react';

import HelloWorld from './index';

test('renders Hello World', () => {
  render(<HelloWorld />);
  const textElement = screen.getByText(/Hello, World!/i);
  expect(textElement).toBeInTheDocument();
});

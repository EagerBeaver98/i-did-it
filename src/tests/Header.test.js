import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header Renders', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/I DID It/i);
  const about = screen.getByText(/About/i);
  expect(headerTitle).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Header renders all header items', () => {
  render(<Header />);
  const headerTitle = screen.getByText(/I DID It/i);
  const about = screen.getByText(/About DID/i);
  const forum = screen.getByText(/Forum/i);
  expect(headerTitle).toBeInTheDocument();
  expect(forum).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Hello World', () => {
  render(<App />);
  const linkElement = screen.getByText(/under construction/i);
  expect(linkElement).toBeInTheDocument();
});
test('Renders header items', () => {
  render(<App />);
  const headerTitle = screen.getByText(/I DID It/i);
  const about = screen.getByText(/About DID/i);
  const forum = screen.getByText(/Forum/i);
  expect(headerTitle).toBeInTheDocument();
  expect(forum).toBeInTheDocument();
  expect(about).toBeInTheDocument();
});
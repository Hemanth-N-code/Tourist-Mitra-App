import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  expect(
    screen.getByText(/Smart Tourist Safety System/i)
  ).toBeInTheDocument();
});

test('renders Blockchain Digital ID section', () => {
  render(<App />);
  expect(
    screen.getByText(/Blockchain Digital ID/i)
  ).toBeInTheDocument();
});

test('renders Tourist Mobile App section', () => {
  render(<App />);
  expect(
    screen.getByText(/Tourist Mobile App/i)
  ).toBeInTheDocument();
});

test('renders AI Anomaly Detection section', () => {
  render(<App />);
  expect(
    screen.getByText(/AI Anomaly Detection/i)
  ).toBeInTheDocument();
});

test('renders Dashboard for Authorities section', () => {
  render(<App />);
  expect(
    screen.getByText(/Dashboard for Authorities/i)
  ).toBeInTheDocument();
});

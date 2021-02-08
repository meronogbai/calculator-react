import { create } from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders correctly', () => {
  const tree = create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('displays numbers', () => {
  render(<App />);
  const button = screen.getByText('9');
  expect(button).toBeInTheDocument();
});

test('displays operators', () => {
  render(<App />);
  const button = screen.getByText(/\+$/i);
  expect(button).toBeInTheDocument();
});

test('displays result of calculation', () => {
  render(<App />);
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('='));
  const result = screen.getByText('42');
  expect(result).toBeInTheDocument();
});

test('clears display on clicking AC', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('X'));
  fireEvent.click(screen.getByText('6'));
  fireEvent.click(screen.getByText('='));
  fireEvent.click(screen.getByText('AC'));
  const zeros = await screen.findAllByText('0');
  expect(zeros).toHaveLength(2);
});

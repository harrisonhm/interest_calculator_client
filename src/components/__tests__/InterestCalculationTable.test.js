import { render, screen } from '@testing-library/react';
import InterestCalculationTable from '../InterestCalculationTable';

test('renders headers', () => {
  render(<InterestCalculationTable rows={[]} />);
  const timeHeader = screen.getByText(/Time Calculated/i);
  expect(timeHeader).toBeInTheDocument();
  const amountHeader = screen.getByText(/Total Amount/i);
  expect(amountHeader).toBeInTheDocument();
  const percentHeader = screen.getByText(/Percentage/i);
  expect(percentHeader).toBeInTheDocument();
  const interestHeader = screen.getByText(/Interest/i);
  expect(interestHeader).toBeInTheDocument();
});

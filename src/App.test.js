import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history'
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import interestCalculationReducer from './slices/interestCalculationSlice';

test('renders dashboard link', () => {
  const history = createMemoryHistory()
  const store = configureStore({reducer: {
    interestCalculation: interestCalculationReducer
  }});
  render(
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    </Provider>
  );
  const linkElement = screen.getByText(/DASHBOARD/i);
  expect(linkElement).toBeInTheDocument();
});

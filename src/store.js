import { configureStore } from '@reduxjs/toolkit';
import interestCalculationReducer from './slices/interestCalculationSlice';

export default configureStore({
  reducer: {
    interestCalculation: interestCalculationReducer
  },
})
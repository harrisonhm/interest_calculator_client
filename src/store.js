import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import interestCalculationSaga from './sagas/interestCalculationSaga';
import interestCalculationReducer from './slices/interestCalculationSlice';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    interestCalculation: interestCalculationReducer
  }, 
  middleware: [ sagaMiddleware ]
})
sagaMiddleware.run(interestCalculationSaga);
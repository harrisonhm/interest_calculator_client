import { createSlice } from '@reduxjs/toolkit'

export const interestCalculationSlice = createSlice({
  name: 'counter',
  initialState: {
    interestCalculationHistory: [],
  },
  reducers: {
    unshiftHistory: (state, action) => {
      state.interestCalculationHistory.unshift(action.payload);
    },
    setHistory: (state, action) => {
      state.interestCalculationHistory = action.payload
    },
  },
})

export const { calculateInterest, setHistory, unshiftHistory } = interestCalculationSlice.actions

export default interestCalculationSlice.reducer
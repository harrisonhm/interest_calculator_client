import { createSlice } from '@reduxjs/toolkit'

export const interestCalculationSlice = createSlice({
  name: 'counter',
  initialState: {
    interestCalculationHistory: [
      { time_calculated: new Date(), total_amount: 100, percentage_interest: 30, interest: 30 },
      { time_calculated: new Date(), total_amount: 100, percentage_interest: 30, interest: 30 },
      { time_calculated: new Date(), total_amount: 100, percentage_interest: 30, interest: 30 },
      { time_calculated: new Date(), total_amount: 100, percentage_interest: 30, interest: 30 },
      { time_calculated: new Date(), total_amount: 100, percentage_interest: 30, interest: 30 }
    ],
  },
  reducers: {
    calculateInterest: (state, action) => {
      const { total_amount, percentage_interest } = action.payload;
      state.interestCalculationHistory.unshift({ 
        total_amount, 
        percentage_interest, 
        interest: total_amount * percentage_interest / 100,
        time_calculated: new Date()
      })
    },
  },
})

export const { calculateInterest } = interestCalculationSlice.actions

export default interestCalculationSlice.reducer
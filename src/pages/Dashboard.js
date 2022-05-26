import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../api';
import InterestCalculationForm from '../components/InterestCalculationForm';
import InterestCalculationTable from '../components/InterestCalculationTable';
import { setHistory, unshiftHistory } from '../slices/interestCalculationSlice';

const Dashboard = () => {
  const interestCalculationHistory = useSelector((state) => state.interestCalculation.interestCalculationHistory)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('interest_calculations');
      dispatch(setHistory(response.data))
    }
    fetchData()
  }, [dispatch])

  const handleSubmit = async (values) => {
    const response = await api.post('interest_calculations', values)
    dispatch(unshiftHistory(response.data))
  }

  return (
    <>
      <main>
        <InterestCalculationForm handleSubmit={handleSubmit} />
        <InterestCalculationTable rows={interestCalculationHistory} />
      </main>
    </>
  );
}

export default Dashboard;
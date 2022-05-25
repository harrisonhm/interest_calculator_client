import React from 'react';
import { useSelector } from 'react-redux';
import InterestCalculationForm from '../components/InterestCalculationForm';
import InterestCalculationTable from '../components/InterestCalculationTable';

const Dashboard = () => {
  const interestCalculationHistory = useSelector((state) => state.interestCalculation.interestCalculationHistory)

  return (
    <>
      <main>
        <InterestCalculationForm />
        <InterestCalculationTable rows={interestCalculationHistory} />
      </main>
    </>
  );
}

export default Dashboard;
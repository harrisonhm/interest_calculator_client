import { Container } from '@mui/system';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="history" element={<History />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

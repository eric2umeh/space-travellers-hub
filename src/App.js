import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets/RocketsPage';
import Missions from './pages/MissionsPage';
import Profile from './pages/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

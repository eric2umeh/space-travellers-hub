import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets/RocketsPage';
import MissionsPage from './pages/missions/MissionsPage';
import Profile from './pages/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';

const App = () => (
  <div>
    <Layout>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  </div>
);

export default App;

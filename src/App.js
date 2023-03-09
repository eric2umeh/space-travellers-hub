import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets/RocketsPage';
import { fetchMissionsData } from './redux/missions/missionsSlice';
import MissionsPage from './pages/missions/MissionsPage';
import ProfilePage from './pages/profile/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);
  return (
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
};

export default App;

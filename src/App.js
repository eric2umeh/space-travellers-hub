import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import RocketsPage from './pages/RocketsPage';
import { fetchMissionsData } from './redux/missions/missionsSlice';
import MissionsPage from './pages/MissionsPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';
import { fetchRocketsData } from './redux/rockets/rocketsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
};

export default App;

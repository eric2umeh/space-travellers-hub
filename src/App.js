import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Rockets from './pages/rockets/RocketsPage';
import Missions from './pages/MissionsPage';
import Profile from './pages/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';
import { fetchRocketsData } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

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

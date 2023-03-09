import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import RocketsPage from './pages/rockets/RocketsPage';
import Missions from './pages/MissionsPage';
import ProfilePage from './pages/profile/ProfilePage';
import Layout from './components/layout/Layout';
import './App.css';
// import { fetchRocketsData } from './redux/rockets/rocketsSlice';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchRocketsData());
  // }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

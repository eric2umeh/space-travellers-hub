import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissionsData } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);
  return (
    <div>
      <h1>Missions</h1>
    </div>
  );
};

export default Missions;

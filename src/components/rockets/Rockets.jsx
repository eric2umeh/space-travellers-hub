import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);
  return (
    <div>
      <h1>SpaceX rockets</h1>
    </div>
  );
};

export default Rockets;

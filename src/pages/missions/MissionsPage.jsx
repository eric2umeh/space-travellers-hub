import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissionsData } from '../../redux/missions/missionsSlice';
import Missions from '../../components/missions/MissionsItem';

const MissionsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsData());
  }, [dispatch]);

  return (
    <section>
      <Missions />
    </section>
  );
};

export default MissionsPage;

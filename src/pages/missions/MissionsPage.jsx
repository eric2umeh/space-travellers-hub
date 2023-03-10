import React from 'react';
import { useSelector } from 'react-redux';
import Missions from '../../components/missions/MissionsItem';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missions.missions);

  return (
    <section>
      {missions.map((item) => (
        <Missions item={item} key={item.mission_id} />
      ))}
    </section>
  );
};

export default MissionsPage;

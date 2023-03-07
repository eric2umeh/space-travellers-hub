import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RocketsItem from '../../components/rockets/RocketsItem';
import classes from './Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <section className={classes.rocket__list}>
      {rockets.map((item) => (
        <RocketsItem item={item} key={item.rocket_id} />
      ))}
    </section>
  );
};

export default Rockets;

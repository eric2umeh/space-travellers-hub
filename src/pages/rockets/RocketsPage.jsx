import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketsItem from '../../components/rockets/RocketsItem';
import { fetchRocketsData } from '../../redux/rockets/rocketsSlice';
import classes from './Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, [dispatch]);

  return (
    <section className={classes.rocket__list}>
      {rockets.map((item) => (
        <RocketsItem item={item} key={item.rocket_id} />
      ))}
    </section>
  );
};

export default Rockets;

import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ProfilePage.module.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved !== false);

  let rocketsContents = <p>No Rockets Found! Please reserved a new one!</p>;
  if (reservedRockets.length > 0) {
    rocketsContents = reservedRockets.map((rocket) => (
      <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
    ));
  }

  return (
    <section>
      <div className={classes.my_missions}>
        <h3>My Missions</h3>
        <ul className={classes.profile_items}>Missions Content</ul>
      </div>
      <div className={classes.my_rockets}>
        <h3>My Rockets</h3>
        <ul className={classes.profile_items}>{rocketsContents}</ul>
      </div>
    </section>
  );
};

export default Profile;

import React from 'react';
import { useSelector } from 'react-redux';
// import classes from "./MyProfilePage.module.css";

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => rocket.reserved !== false);

  let rocketsContents;
  if (reservedRockets.length === 0) {
    return <p>No Rockets Reserved!</p>;
  }
  if (reservedRockets.length > 0) {
    rocketsContents = reservedRockets.map((rocket) => (
      <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
    ));
  }
  return (
    <section>
      <div className="my_missions">
        <h3>My Missions</h3>
        <ul className="profile_items">Missions Content</ul>
      </div>
      <div className="my_rockets">
        <h3>My Rockets</h3>
        <ul className="profile_items">{rocketsContents}</ul>
      </div>
    </section>
  );
};

export default Profile;

import React from 'react';
import { useSelector } from 'react-redux';
// import classes from "./MyProfilePage.module.css";

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  
  return (
    <section>
      <div className="my_missions">
        <h3>My Missions</h3>
        <ul className="profile_items">{missionsContent}</ul>
      </div>
      <div className="my_rockets">
        <h3>My Rockets</h3>
        <ul className="profile_items">{rocketsContent}</ul>
      </div>
    </section>
  );
};

export default Profile;

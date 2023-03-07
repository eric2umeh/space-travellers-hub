import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const RocketsItem = ({ item }) => (
  <div className="rocket__info">
    <img
      src={item.rocket_images[0]}
      alt="Rocket"
      className="rocket__info-image"
    />
    <div className="rocket__info-details">
      <h4 className="rocket__info-heading">{item.rocket_name}</h4>
      <p className="rocket__info-description">{item.rocket_description}</p>
      <button type="button" className="rocket__info-btn">
        Reserve Rocket
      </button>
    </div>
  </div>
);

RocketsItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default RocketsItem;

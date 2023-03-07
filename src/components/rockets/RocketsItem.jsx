import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rocketsSlice';
import './RocketsItem.css';

const RocketsItem = ({ item }) => {
  const dispatch = useDispatch();
  const reserveHandler = () => {
    dispatch(reserveRocket(item.rocket_id));
  };
  return (
    <div className="rocket__info">
      <img
        src={item.rocket_images[0]}
        alt="Rocket"
        className="rocket__info-image"
      />
      <div className="rocket__info-details">
        <h4 className="rocket__info-heading">{item.rocket_name}</h4>
        <p className="rocket__info-description">{item.rocket_description}</p>
        <button
          type="button"
          className="rocket__info-btn"
          onClick={reserveHandler}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

RocketsItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default RocketsItem;

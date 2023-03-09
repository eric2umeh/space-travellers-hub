import PropTypes from 'prop-types';
import React from 'react';
import './RocketsItem.css';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rocketsSlice';

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
        <div className="rocket__info-reservation-inf">
          <p className="rocket__info-description">
            {item.reserved && (
              <span className="rocket__info-reserved">Reserved</span>
            )}
            {item.rocket_description}
          </p>
        </div>
        {item.reserved ? (
          <button
            type="submit"
            className="rocket__info-btn cancel"
            onClick={cancelHandler}
          >
            Cancel Rocket
          </button>
        ) : (
          <button
            type="submit"
            className="rocket__info-btn"
            onClick={reserveHandler}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
};

RocketsItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default RocketsItem;

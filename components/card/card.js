import React from 'react';
import PropTypes from 'prop-types';

import './card.scss'

function Card({ title, image }) {
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(to top, #000 1%, transparent), url(${image})` }} >
      <div className="card__title">
        { title }
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Card;
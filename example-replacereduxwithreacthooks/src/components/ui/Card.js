import React from 'react';

import '../../stylesheets/Card.css';

const Card = props => {
  return <div className="card" style={props.style}>{props.children}</div>;
};

export default Card;

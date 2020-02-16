import React from 'react';
import '../stylesheets/CharComponent.css';

const charComponent = (props) => {
	return(
		<div className="CharComponent" onClick={props.clicked}>{props.char}</div>
	);
}

export default charComponent;
import React from 'react';

const outputComponent = (props) => {
	return(
		<div>
			<h3>Your text:</h3>
			<p>{props.userInput}</p>
		</div>
	);	
};

export default outputComponent;
import React from 'react';

const inputComponent = (props) => {
	return(
		<div>
			<h3>Please type your text:</h3>
			<input type="text" onChange={props.changeUserInput} value={props.userInput}/>
		</div>
	);
};

export default inputComponent;
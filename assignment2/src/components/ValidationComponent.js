import React from 'react';

const ValidationComponent = (props) => {
	const maxLength = 5;
	const validationMessage = props.userInputLength >= maxLength ? "Text long enough" : "Text too short";	
	
	return(
		<div>
			<p>{validationMessage}</p>
		</div>
	);
};

export default ValidationComponent;
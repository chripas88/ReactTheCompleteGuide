import React from 'react';

const userInput = (props) =>{
	const style = {
		border: '2px solid red'
	}
	
	return(
		<div>
			<h3>This is the User Input Component</h3>
			<input style={style} type="text" onChange={props.changeUsername} value={props.username}/>
		</div>
	);
}

export default userInput;
import React from 'react';
import '../stylesheets/UserOutput.css';

const userOutput = (props) => {
	return(
		<div className="UserOutput">
			<h3>This is the User Output Component</h3>
			<p>Username: {props.username}</p>
			<p>This is UserOutput paragraph 1</p>
			<p>This is UserOutput paragraph 2</p>
		</div>
	);	
}

export default userOutput;
import React from 'react';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends React.Component{
	
	state = {
		username: 'username'
	};

	changeUsernameHandler = (event) => {
		this.setState({username: event.target.value});
	}
	
	render(){
		return(
			<div>
				<div>App</div>
				<UserInput username={this.state.username} changeUsername={this.changeUsernameHandler}/>
				<UserOutput username={this.state.username}/>
				<UserOutput username={this.state.username}/>
				<UserOutput username={this.state.username}/>
				<UserOutput username={this.state.username}/>
			</div>
		);
	}
}

export default App;
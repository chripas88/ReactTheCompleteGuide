import React from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';
import CharComponent from './CharComponent';
import ValidationComponent from './ValidationComponent';

class App extends React.Component{
	state = {
		userInput: 'text'
	};

	inputChangedHandler = (event) => {
		this.setState({userInput: event.target.value});
	}
	
	deleteCharHandler = (index) => {
		const text = this.state.userInput.split('');
		text.splice(index, 1);
		const updatedText = text.join('');
		this.setState({userInput: updatedText});
		
	}
	
	render(){
		const charList = this.state.userInput.split('').map((ch, index) => {
			return <CharComponent char={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>
		});
		
		return(
			<div>
				<InputComponent userInput={this.state.userInput} changeUserInput={this.inputChangedHandler}/>
				<OutputComponent userInput={this.state.userInput}/>
				<ValidationComponent userInputLength={this.state.userInput.length}/>
				{charList}
			</div>
		);
	}
}

export default App;
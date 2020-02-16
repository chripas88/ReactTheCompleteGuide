import React from 'react';
import PropTypes from 'prop-types';
import classes from '../../stylesheets/Person.module.css';
import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../../context/auth-context';

class Person extends React.Component {
	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}
	
	static contextType = AuthContext;
	
	componentDidMount(){
		// this.inputElement.focus();
		this.inputElementRef.current.focus();
	}
	
	render(){
		console.log('[Person.js] rendering...');
		return (
			<Auxiliary>
				{this.context.authenticated ? <p>Authenticated</p> : <p>Please Log in</p>}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					//ref={(inputEl) => {this.inputElement = inputEl}}
					ref={this.inputElementRef}
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxiliary>
		);	
	}	
};

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

// class Person extends React.Component {
// 	render(){
// 		console.log('[Person.js] rendering...');
// 		return (
// 			<div className={classes.Person}>
// 				<p onClick={this.props.click}>
// 					I'm {this.props.name} and I am {this.props.age} years old!
// 				</p>
// 				<p>{this.props.children}</p>
// 				<input type="text" onChange={this.props.changed} value={this.props.name} />
// 			</div>
// 		);	
// 	}	
// };

export default withClass(Person, classes.Person);

// const person = props => {
// 	console.log('[Person.js] rendering...');
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} years old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;



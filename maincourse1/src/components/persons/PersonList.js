import React from 'react';
import Person from './Person';

class PersonList extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState){ //React.PureComponent
		console.log('[PersonList.js] shouldComponentUpdate');
		return (
			nextProps.persons !== this.props.persons ||
			nextProps.changed !== this.props.changed ||
			nextProps.clicked !== this.props.clicked
		);
	}
	
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('[PersonList.js] getSnapshotBeforeUpdate');
		return { message: 'Snapshot!' };
	}
	
	componentDidUpdate(prevProps, prevState, snapshot){
		console.log('[PersonList.js] componentDidUpadate');
		console.log(snapshot);
	}
	
	componentWillUnmount(){
		console.log('[PersonList.js] componentWillUnmount');
	}
	
	render(){
		console.log('[PersonList.js] rendering...');
		return(
			this.props.persons.map((person, index) => {
				return (
					<Person
						click={() => this.props.clicked(index)}
						name={person.name}
						age={person.age}
						key={person.id}
						changed={event => this.props.changed(event, person.id)}
					/>
				);
			})
		);	
	}	
}

export default PersonList;

// const personList = (props) => {
// 	console.log('[PersonList.js] rendering...');
// 	return(
// 		props.persons.map((person, index) => {
// 			return (
// 				<Person
// 					click={() => props.clicked(index)}
// 					name={person.name}
// 					age={person.age}
// 					key={person.id}
// 					changed={event => props.changed(event, person.id)}
// 				/>
// 			);
// 		})
// 	);
// }

// export default personList;
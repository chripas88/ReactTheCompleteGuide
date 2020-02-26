import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

import Person from '../components/Person';
import AddPerson from '../components/AddPerson';

class Persons extends Component {

	addPersonHandler(name, age){
		const newPerson = {
			id: Math.random(), // not really unique but good enough here!
			name: name,
			age: age
		}
		this.props.onPersonAdd(newPerson);
	}
	
	render () {

			return (
					<div>
							<AddPerson personAdded={(name, age) => this.addPersonHandler(name, age)} />
							{this.props.persons.map(person => (
									<Person 
											key={person.id}
											name={person.name} 
											age={person.age} 
											clicked={() => this.props.onPersonRemove(person.id)}/>
							))}
					</div>
			);
	}
}

const mapStateToProps = state => {
	return {
		persons: state.persons
	};
};

const mapDispatchToProps = dispatch => {
	return{
		onPersonAdd: (newPerson) => dispatch({type: actionTypes.ADD_PERSON, newPerson: newPerson}),
		onPersonRemove: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
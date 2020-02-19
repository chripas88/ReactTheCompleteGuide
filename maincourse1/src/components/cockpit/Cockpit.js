import React, { useEffect, useRef, useContext } from 'react';
import classes from '../../stylesheets/Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
	const toggleBtnRef = useRef(null);
	const authContext = useContext(AuthContext);
	
	useEffect(() => {
    console.log('[Cockpit.js] useEffect 1');
		// setTimeout(() => {
		// 	alert('Saved data to cloud!');
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {			
			console.log('[Cockpit.js] cleanup work in useEffect 1');
		};
  }, []);
	
	useEffect(() => {
    console.log('[Cockpit.js] useEffect 2');		
		return () => {
			console.log('[Cockpit.js] cleanup work in useEffect 2');
		};
  });
	
	const assignedClasses = [];	
	let btnClass = '';
	
	if(props.showPersons){
		btnClass = classes.Red;	
	}	
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}
	console.log('[Cockpit.js] rendering...');
	return(
		<div className={classes.Cockpit}>
			<h1>{props.appTitle}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
				Toggle Persons
			</button>			
			<button onClick={authContext.login}>Login</button>
		</div>
	);
}

export default React.memo(Cockpit);
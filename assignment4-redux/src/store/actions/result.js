import * as actionTypes from './actionTypes';

const saveResult = (result) => {
	return {
		type: actionTypes.STORE_RESULT,
		result: result
	}
}

export const storeResult = (result) => {
	// return (dispatch, getState) => {
	return dispatch => {
		setTimeout(() => {
			// const oldCounter = getState().ctr.counter;
			// console.log('Old counter: ' + oldCounter)
			dispatch(saveResult(result))
		}, 2000);
	}	
}

export const deleteResult = (id) => {
	return {
		type: actionTypes.DELETE_RESULT,
		id: id
	}
}
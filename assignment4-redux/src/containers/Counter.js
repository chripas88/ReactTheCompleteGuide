import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

import CounterControl from '../components/CounterControl';
import CounterOutput from '../components/CounterOutput';

class Counter extends Component { 

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />
							<hr />
							<button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
							<ul>
								{this.props.storedResults.map(res => (
									<li key={res.id} onClick={() => this.props.onDeleteResult(res.id)}>{res.value}</li>	
								))}
							</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncCounter: () => dispatch(actionCreators.increment()),
		onDecCounter: () => dispatch(actionCreators.decrement()),
		onAddCounter: () => dispatch(actionCreators.add(5)),
		onSubCounter: () => dispatch(actionCreators.subtract(5)),
		onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
		onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
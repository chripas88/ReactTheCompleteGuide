import React, { Component } from 'react';

import Counter from '../containers/Counter';
import '../stylesheets/components/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;

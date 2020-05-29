import React from 'react';
import './App.css';
import componentize from './componentize';
import Backend from './backend';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    global.backend = new Backend(this).start();
  }

  render() {
    return <React.Fragment>
      {this.state.data.map(componentize)}
      </React.Fragment>;
  }

}

export default App;

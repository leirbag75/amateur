import React from 'react';
import './App.css';
import componentize from './componentize';
import Http from './http';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    global.http = new Http(this).start();
  }

  render() {
    return <React.Fragment>
      {this.state.data.map(componentize)}
      </React.Fragment>;
  }

}

export default App;

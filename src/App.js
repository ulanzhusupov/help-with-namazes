import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-between">
          <nav className="col-2">Menu</nav>
          <div className="col-3">User</div>
        </div>
      </div>
    );
  }
}

export default App;
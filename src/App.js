import React, { Component } from 'react';
import Header from "./components/header";
import "./App.css";
import MainPage from './components/main-page/MainPage';
import NamazPage from './components/namaz-page/NamazPage';
import AddPage from './components/add-page/AddPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="page">
        <Header />
        <AddPage />
      </div>
    );
  }
}

export default App;
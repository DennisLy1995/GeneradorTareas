import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import todos from "./todos.json";

class App extends React.Component {
  constructor(){
    super();
    this.state = todos;
  }


  render() {

    

    return (
      <div className="App">
        <Navigation titulo="Tasks Generator" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

}

export default App;

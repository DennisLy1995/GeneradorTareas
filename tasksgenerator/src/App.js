import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Card from "./Card";
import InformationCard from './informationCard';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="App">
          <Navigation titulo="Tasks Generator" />
        </div>
        <div>
          <Card />
        </div>
        <div id="tasksContainer">
        <InformationCard title="Titulo de la tarjeta" description="Lorem ipsum" priority="High"/>
        </div>
      </div>


    );
  }

}

export default App;

import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Card from "./Card";
import InformationCard from './informationCard';
import InformationBlock from "./informationRead";

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
          <InformationBlock title="Tasks Generator" information="Use the main card to generate tasks you have to do, you can delete the cards once the task is completed."/>
        </div>
        <div id="tasksContainer">
        <InformationCard title="Titulo de la tarjeta" description="Lorem ipsum" priority="High"/>
        <InformationCard title="Titulo de la tarjeta 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." priority="Low"/>
        <InformationCard title="Titulo de la tarjeta 2" description="Lorem ipsum" priority="Medium"/>
        </div>
      </div>


    );
  }

}

export default App;

import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Card from "./Card";
import InformationCard from './informationCard';
import InformationBlock from "./informationRead";
import TODOS from './todos.json';

class App extends React.Component {
  constructor() {
    super()
    this.state = TODOS.todos.map((todo, index) =>
    <InformationCard numberID={index} key={index} title={todo.title} description={todo.description} priority={todo.priority}/>
    );
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <Navigation titulo="Tasks Generator" />
        </div>
        <div>
          <Card />
          <InformationBlock title="Tasks Generator" information="Use the main card to generate tasks you have to do, you can delete the cards once the task is completed." />
        </div>
        <div id="tasksContainer">
          { 
            this.state
          }
        </div>
      </div>
    );
  }

}

export default App;
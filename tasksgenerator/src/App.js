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
    this.list = TODOS
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
          <InformationCard numberID={1} title={this.list.todos[0].title} description={this.list.todos[0].description} priority={this.list.todos[0].priority} />
          <InformationCard numberID={2} title={this.list.todos[1].title} description={this.list.todos[1].description} priority={this.list.todos[1].priority} />
          <InformationCard numberID={3} title={this.list.todos[2].title} description={this.list.todos[2].description} priority={this.list.todos[2].priority} />
          <InformationCard numberID={4} title={this.list.todos[3].title} description={this.list.todos[3].description} priority={this.list.todos[3].priority} />
          <InformationCard numberID={5} title={this.list.todos[4].title} description={this.list.todos[4].description} priority={this.list.todos[4].priority} />
        </div>
      </div>
    );
  }

}

export default App;
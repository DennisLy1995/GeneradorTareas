import React, {Component} from "react";
import "./Navigation.css";

class navigator extends Component {
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark">
        <a className="text-white" href="https://github.com/DennisLy1995/TasksGenerator">
          {this.props.titulo}
        </a>
      </nav>
      );
  }
}


export default navigator;
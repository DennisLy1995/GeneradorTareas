import React, { Component } from "react";
import "./Navigation.css";
import logo from './logo.svg';

class navigator extends Component {
  render() {
    return (


      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand" href="https://github.com/DennisLy1995/TasksGenerator"> {this.props.titulo}</a>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <img src={logo} className="App-logo" alt="logo" />
            </li>
          </ul>
        </div>

      </nav>
      
    );
  }
}


export default navigator;
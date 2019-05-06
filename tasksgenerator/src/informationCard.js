import React, { Component } from "react";
import './informationCard.css';
import todos from "./todos.json";

class InformationCard extends React.Component {
  render() {

    return (
      <div className="card border-secondary mb-3 informationCard" style={{minWidth: '15rem',maxWidth:'20rem', width:'15%', margin: '1%' , display: 'inline-block'}}>

        <div className="card-header"  style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{this.props.title}</label>
          </div>
        </div>

        <div className="card-body"  style={{textAlign:'center', height:'20rem', maxHeight:'20rem', overflow: 'scroll'}}>
          <div className="form-group">
            <label htmlFor="description">{this.props.description}</label>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority: {this.props.priority}</label>
          </div>
        </div>
        
        <div className="card-footer"  style={{textAlign:'center'}}>
          <button type="button" className="btn btn-danger">Delete task</button>
        </div>

      </div>

    );
  }
}

export default InformationCard;
import React, { Component } from "react";
import todos from "./todos.json";

class InformationCard extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="card border-secondary mb-3" style={{ minWidth: '15rem', width:'20rem', margin: '1%' , display: 'inline-block'}}>

        <div className="card-header"  style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">{this.props.title}</label>
          </div>
        </div>

        <div className="card-body"  style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="description">{this.props.description}</label>
            <label htmlFor="priority">{this.props.priority}</label>
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
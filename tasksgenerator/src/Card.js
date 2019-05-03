import React, { Component } from "react";
import todos from "./todos.json";
import InformationCard from "./informationCard.js";
import ReactDOM from 'react-dom';

class Card extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      <div className="card border-secondary mb-3" style={{ minWidth: '15rem', width:'20rem', margin: '1%' , display: 'inline-block'}}>

        <div className="card-header"  style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add your title" />
          </div>
        </div>

        <div className="card-body" style={{textAlign:'center'}}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" rows="3"></textarea>
          </div>
          <small id="emailHelp" className="form-text text-muted">Keep your tasks in order...</small>
        </div>
        
        <div className="card-footer">
          <button type="button" className="btn btn-info" onClick={addInformationalCard}>Add task</button>
          
          <div style={{float:'right', marginBottom:'10px'}}>
            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="Low"/>
                Low </label>
            </div>

            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="Medium" />
                Medium </label>
            </div>


            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="High" />
                High </label>
            </div>

          </div>
        </div>


      </div>



    );
  }
}

export default Card;

function addInformationalCard(){

  var title = "title test";
  var description = "Description test";
  var priority  = "High";
  ReactDOM.render(<InformationCard title={title} description={description} priority={priority}/>, document.getElementById('tasksContainer'));
  

}



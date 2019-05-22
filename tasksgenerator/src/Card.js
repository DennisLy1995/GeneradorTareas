import React, { Component } from "react"
import todos from "./todos.json"


class Card extends React.Component {
  constructor(props){
    super(props);
    this.list = todos
    this.state = {

      oldCards : this.list

    }

    this.addInformationalCard = this.addInformationalCard.bind(this);

  }

 addInformationalCard() {

    var title = document.getElementById('titleNew').value
    var description = document.getElementById('descriptionNew').value
    var priority = ''
    var radio1 = document.getElementById('optionsRadios1')
    var radio2 = document.getElementById('optionsRadios2')
    var radio3 = document.getElementById('optionsRadios3')
      
    if (radio1.checked) {
      priority = 'High'
    } else if (radio2.checked) {
      priority = 'Medium'
    } else if (radio3.checked) {
      priority = 'Low'
    } else {
      priority = ''
    }
  
    if (title === "" || description === "" || priority === "") {
      alert('Complete all the fills in the card')
    } else {
      clearMainCard()
      console.log(this.state);
    }
  
  }

  render() {

    return (
      <div className="card border-secondary mb-3" style={{ minWidth: '10rem', width: '29%', margin: '1%', display: 'inline-block' }}>

        <div className="card-header" style={{ textAlign: 'center' }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input type="email" className="form-control" id="titleNew" aria-describedby="emailHelp" placeholder="Add your title" />
          </div>
        </div>

        <div className="card-body" style={{ textAlign: 'center' }}>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="descriptionNew" rows="6"></textarea>
          </div>
          <small id="emailHelp" className="form-text text-muted">Keep your tasks in order...</small>
        </div>

        <div className="card-footer">
          <button type="button" className="btn btn-info" onClick={this.addInformationalCard}>Add task</button>

          <div style={{ float: 'right', marginBottom: '10px' }}>

            <div>
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="Low" />
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

export default Card



function clearMainCard() {
  document.getElementById('titleNew').value = ''
  document.getElementById('descriptionNew').value = ''
  document.getElementById('optionsRadios1').checked = false
  document.getElementById('optionsRadios2').checked = false
  document.getElementById('optionsRadios3').checked = false
}



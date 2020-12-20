import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  state= {
    isDark: true,
    mode: 'Night',
    input: "",
    inputError: 'Off',
    list: [],
  }

  // Changes Mode to day or night
  // adds either 'Night' or 'Day' to various element classnames to switch styling
  changeMode = () => {
    this.setState({
      isDark: !this.state.isDark,
      mode: (this.state.isDark === false) ? "Night" : "Day"
    })
  }

  // Updates state with whatver is typed into input
  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  // Handles the user submitted input
  handleSubmit = (event) => {
    event.preventDefault()  //Prevents page reload
    document.querySelector('.emptyList').style.display = "none"   //Hides 'Empty list' element
    this.setState({inputError: (this.state.input === "") ? 'On' : 'Off'}) //Checks for user input

    // If input is accepted:
    // changes all filter text to gray.  'All' is automatically hightlighted blue
    if (this.state.input !== "") {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
      document.querySelectorAll('.listItem').forEach( item => {item.style.display = "flex"} )  
      document.querySelector('.sortAll').style.color = "var(--Blue)"
      
      // adds list item object into the state 
      this.setState({
        list: [...this.state.list, {
          'todo': this.state.input,
          'status': 'NotDone',
          'display': 'flex'
        }]
      })
      // resets the input value on the form
      document.getElementById('listInput').value = ""
    }
    //sets input on the state to ""
    this.setState({input: ""})
  }

  // Close list item function
  // accepts list item index position as a parameter 
  close = (num) => {
    // create a dupe array of list items
    // removes the item that was closed
    // then sets the edited array in the state to replace old state
    let array = [...this.state.list]
    array.splice(num, 1)
    this.setState({list: array})
    
    // If all list items are removed, gray out all filter text
    if (array.length === 0) {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    }
  }

  // Sets the list item task as being completed
  complete = (num) => {
    // create a dupe array of list items
    // sets data.status (html) as either 'Done' or 'NotDone'
    // various elements stylings changes based on the status
    let dupeArray = [...this.state.list]
    let listItem = document.querySelector('.listItem' + num)
    dupeArray[num].status = (listItem.dataset.status === 'NotDone') ? "Done" : "NotDone"
    this.setState({list: dupeArray})
  }

  // Runs the various filter options on the interface
  filter = (status) => {
    // create a dupe array of list items
    // greys out all filter option text except for the one that is chosen by user
    let dupeArray = [...this.state.list]
    let items = document.querySelectorAll('.listItem')
    document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    document.querySelector(`.sort${status}`).style.color = "var(--Blue)"
    dupeArray.forEach( item => {item.display = 'flex'} )

    // If 'Active' is chosen, 'Completed' items are hidden
    if (status === 'Active') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "Done") {dupeArray[ind].display = "none"}
      } )
    // If 'Completed' is chosen, 'Active' items are hidden
    } else if (status === 'Complete') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "NotDone") {dupeArray[ind].display = "none"}
      } )
    // If 'All' is chosen, all list items are shown  
    } else if (status === 'All') {
      items.forEach( item => {dupeArray.display = "flex"} )
    // If 'Clear' is chosen, all list items that are 'Complete' will be removed
    } else if (status === "Clear") {
      for (let i = dupeArray.length - 1; i >= 0; i--) {
        if (dupeArray[i].status === "Done") {dupeArray.splice(i, 1)}
      }
    }
    // If all list items are removed, gray out all filter text
    if (dupeArray.length === 0) {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    }
    // Sets state with the new duped, edited array
    this.setState({list: dupeArray})
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state.list));
    //console.log( JSON.parse(localStorage.getItem("state")) )
  }

  render() {
    return (
      <div className={`App bg${this.state.mode}`}>
        <Header state={this.state} />
        <ToDo state={this.state} 
              changeMode={this.changeMode} 
              handleInput={this.handleInput} 
              close={this.close} 
              complete={this.complete} 
              handleSubmit={this.handleSubmit} 
              filter={this.filter} />
      </div>
    )
  }
}

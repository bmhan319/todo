import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  state= {
    modeCount: 0,
    input: "",
    list: [],
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.input === "") {
      console.log("Nope")
    } else {
      this.setState({
        list: [...this.state.list, {
          'todo': this.state.input,
          'status': 'notDone',
          'stroke': 'strokeOff',
          'listComplete': "listNotComplete",
          'strikeThrough': 'strikeOff'
        }]
      })
      document.getElementById('listInput').value = ""
    }
    this.setState({
      input: ""
    })
  }

  close = (num) => {
    let array = [...this.state.list]
    array.splice(num, 1)
    this.setState({
      list: array
    })
  }

  complete = (num) => {
    let dupeArray = [...this.state.list]
    
    document.querySelector('.listItemPath' + num).classList.remove(dupeArray[num].stroke)
    document.querySelector('.listComplete' + num).classList.remove(dupeArray[num].listComplete)
    document.querySelector('.listItemSubject' + num).classList.remove(dupeArray[num].strikeThrough)

    dupeArray[num].status = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "done" : "notDone"
    dupeArray[num].stroke = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strokeOn" : "strokeOff"
    dupeArray[num].listComplete = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "listComplete" : "listNotComplete"
    dupeArray[num].strikeThrough = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strikeOn" : "strikeOff"
    
    this.setState({
      list: dupeArray
    })

    document.querySelector('.listItemPath' + num).classList.add(this.state.list[num].stroke)   
    document.querySelector('.listComplete' + num).classList.add(this.state.list[num].listComplete)
    document.querySelector('.listItemSubject' + num).classList.add(this.state.list[num].strikeThrough)
  }


  render() {
    return (
      <div className="App bgNightMode">
        <Header />
        <ToDo state={this.state} 
              changeMode={this.changeMode} 
              handleChange={this.handleChange} 
              close={this.close} 
              complete={this.complete} 
              handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

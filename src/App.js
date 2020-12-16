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
    const inputError = document.querySelector('.inputError')
    event.preventDefault()
    if (this.state.input === "") {
      inputError.classList.remove('inputErrorOff')
      inputError.classList.add('inputErrorOn')
      document.querySelector('.listInputContainer').style.border = "2px solid orange"
    } else {
      inputError.classList.remove('inputErrorOn')
      inputError.classList.add('inputErrorOff')
      document.querySelector('.listInputContainer').style.border = "0"
      this.setState({
        list: [...this.state.list, {
          'todo': this.state.input,
          'status': 'notDone',
          'stroke': 'strokeOff',
          'listComplete': "listNotComplete",
          'strikeThrough': 'strikeOff',
          'display': 'flex'
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

  filter = (status) => {
    let dupeArray = [...this.state.list]
    let items = document.querySelectorAll('.listItem')
    dupeArray.forEach( item => {
      item.display = 'flex'
    })

    if (status === 'active') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "done") {
          dupeArray[ind].display = "none"
        }
      } )
    } else if (status === 'complete') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "notDone") {
          dupeArray[ind].display = "none"
        }
      } )
    } else if (status === 'all') {
      items.forEach( item => {
        dupeArray.display = "flex"
      } )
    }
    this.setState({
      list: dupeArray
    })
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
              handleSubmit={this.handleSubmit} 
              filter={this.filter} />
      </div>
    )
  }
}

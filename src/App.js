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

  changeMode = () => {
    this.setState({
      isDark: !this.state.isDark,
      mode: (this.state.isDark === false) ? "Night" : "Day"
    })
  }

  handleInput = (event) => {
    this.setState({input: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.querySelector('.emptyList').style.display = "none"
    this.setState({inputError: (this.state.input === "") ? 'On' : 'Off'})

    if (this.state.input !== "") {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
      document.querySelectorAll('.listItem').forEach( item => {item.style.display = "flex"} )  
      document.querySelector('.sortAll').style.color = "var(--Blue)"
      
      this.setState({
        list: [...this.state.list, {
          'todo': this.state.input,
          'status': 'NotDone',
          'display': 'flex'
        }]
      })

      document.getElementById('listInput').value = ""
    }

    this.setState({input: ""})
  }

  close = (num) => {
    let array = [...this.state.list]
    array.splice(num, 1)
    this.setState({list: array})

    if (array.length === 0) {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    }
  }

  complete = (num) => {
    let dupeArray = [...this.state.list]
    let listItem = document.querySelector('.listItem' + num)
    dupeArray[num].status = (listItem.dataset.status === 'NotDone') ? "Done" : "NotDone"
    this.setState({list: dupeArray})
  }

  filter = (status) => {
    let dupeArray = [...this.state.list]
    let items = document.querySelectorAll('.listItem')
    document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    document.querySelector(`.sort${status}`).style.color = "var(--Blue)"
    dupeArray.forEach( item => {item.display = 'flex'} )

    if (status === 'Active') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "Done") {dupeArray[ind].display = "none"}
      } )
    } else if (status === 'Complete') {
      items.forEach( (item, ind) => {
        if (item.dataset.status === "NotDone") {dupeArray[ind].display = "none"}
      } )
    } else if (status === 'All') {
      items.forEach( item => {dupeArray.display = "flex"} )
    } else if (status === "Clear") {
      for (let i = dupeArray.length - 1; i >= 0; i--) {
        if (dupeArray[i].status === "Done") {dupeArray.splice(i, 1)}
      }
    }
    if (dupeArray.length === 0) {
      document.querySelectorAll('.sortText').forEach( item => {item.style.color = "var(--DT_Gray)"} )
    }
    this.setState({list: dupeArray})
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

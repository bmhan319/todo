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

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    const inputError = document.querySelector('.inputError')
    event.preventDefault()
    document.querySelector('.emptyList').style.display = "none"

    if (this.state.input === "") {
      this.setState({
        inputError: 'On',
      })
    } else {
      this.setState({
        inputError: 'Off',
      })
      
      document.querySelectorAll('.sortText').forEach(item=>{
        item.style.color = "var(--DT_Gray)"
      })
      document.querySelectorAll('.listItem').forEach(item=>{
        item.style.display = "flex"
      })
      document.querySelector('.sortAll').style.color = "var(--Blue)"
      
      this.setState({
        list: [...this.state.list, {
          'todo': this.state.input,
          'status': 'notDone',
          'stroke': 'strokeOff',
          'listComplete': "listNotComplete",
          'strikeThrough': 'strikeOff',
          'display': 'flex',
          'innerBG': 'visible'
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
    document.querySelector('.innerButton' + num).classList.remove(dupeArray[num].innerBg)

    dupeArray[num].status = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "done" : "notDone"
    dupeArray[num].stroke = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strokeOn" : "strokeOff"
    dupeArray[num].listComplete = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "listComplete" : "listNotComplete"
    dupeArray[num].strikeThrough = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strikeOn" : "strikeOff"
    dupeArray[num].innerBg = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "buttonVisible" : "buttonInvisible"
    
    this.setState({
      list: dupeArray
    })

    document.querySelector('.listItemPath' + num).classList.add(this.state.list[num].stroke)   
    document.querySelector('.listComplete' + num).classList.add(this.state.list[num].listComplete)
    document.querySelector('.listItemSubject' + num).classList.add(this.state.list[num].strikeThrough)
    document.querySelector('.innerButton' + num).classList.add(this.state.list[num].innerBg)
  }

  filter = (status) => {
    let dupeArray = [...this.state.list]
    let items = document.querySelectorAll('.listItem')
    document.querySelectorAll('.sortText').forEach( item => {
      item.style.color = "var(--DT_Gray)"
    })
    dupeArray.forEach( item => {
      item.display = 'flex'
    })

    if (status === 'Active') {
      document.querySelector('.sortActive').style.color = "var(--Blue)"
      items.forEach( (item, ind) => {
        if (item.dataset.status === "done") {
          dupeArray[ind].display = "none"
        }
      } )
    } else if (status === 'Complete') {
      document.querySelector('.sortCompleted').style.color = "var(--Blue)"
      items.forEach( (item, ind) => {
        if (item.dataset.status === "notDone") {
          dupeArray[ind].display = "none"
        }
      } )
    } else if (status === 'All') {
      document.querySelector('.sortAll').style.color = "var(--Blue)"
      items.forEach( item => {
        dupeArray.display = "flex"
      } )
    } else if (status === "Clear") {
      document.querySelector('.sortAll').style.color = "var(--Blue)"
      for (let i = dupeArray.length - 1; i >= 0; i--) {
        if (dupeArray[i].status === "done") {
          dupeArray.splice(i, 1)
        }
      }
    }

    this.setState({
      list: dupeArray
    })
  }

  render() {
    return (
      <div className={`App bg${this.state.mode}`}>
        <Header state={this.state} />
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

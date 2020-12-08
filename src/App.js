import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  state= {
    modeCount: 0,
  }

  changeMode = (num) => {
    this.setState({
      modeCount: this.state.modeCount + num
    })
    if(this.state.modeCount % 2 !== 0) {
      document.querySelector('.listMode').classList.remove('nightIcon')
      document.querySelector('.listMode').classList.add('dayIcon')
      
      document.querySelector('.headerContainer').classList.remove('')
      document.querySelector('.headerContainer').classList.add('')
    } else {
      document.querySelector('.listMode').classList.remove('dayIcon')
      document.querySelector('.listMode').classList.add('nightIcon')
      document.querySelector('.headerContainer').classList.remove('')
      document.querySelector('.headerContainer').classList.add('')
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ToDo changeMode={this.changeMode} />
      </div>
    )
  }
}

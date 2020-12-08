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
      document.querySelector('.headerContainer').classList.remove('headerDay')
      document.querySelector('.headerContainer').classList.add('headerNight')
      document.querySelector('.App').classList.remove('bgDayMode')
      document.querySelector('.App').classList.add('bgNightMode')
      document.querySelectorAll('.listBg').forEach( item => {
        item.classList.remove('listBgDay')
        item.classList.add('listBgNight')
       } )
    } else {
      document.querySelector('.listMode').classList.remove('dayIcon')
      document.querySelector('.listMode').classList.add('nightIcon')
      document.querySelector('.headerContainer').classList.remove('headerNight')
      document.querySelector('.headerContainer').classList.add('headerDay')
      document.querySelector('.App').classList.remove('bgNightMode')
      document.querySelector('.App').classList.add('bgDayMode') 
      document.querySelectorAll('.listBg').forEach( item => {
        item.classList.remove('listBgNight')
        item.classList.add('listBgDay')
      } )
    }
  }

  render() {
    return (
      <div className="App bgNightMode">
        <Header />
        <ToDo changeMode={this.changeMode} />
      </div>
    )
  }
}

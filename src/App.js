import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  state= {
    modeCount: 0,
    input: "",
    list: []
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      list: [...this.state.list, this.state.input]
    })
    document.getElementById('listInput').value = ""
  }

  close = (num) => {
    let array = [...this.state.list]
    array.splice(num, 1)
    this.setState({
      list: array
    })
  }

  complete = (num) => {
    console.log("complete")
    document.querySelector('.listItemPath' + num).classList.remove('strokeOff')
    document.querySelector('.listItemPath').classList.add('strokeOn')
    document.querySelector('.listComplete' + num).classList.add('listComplete')
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
      
      document.querySelectorAll('.tailText').forEach( item => {
        item.classList.remove('tailTextDay')
        item.classList.add('tailTextNight')
       } )
      document.querySelectorAll('.listBg').forEach( item => {
        item.classList.remove('listBgDay')
        item.classList.add('listBgNight')
       } )
      document.querySelectorAll('.listText').forEach( item => {
      item.classList.remove('listTextDay')
      item.classList.add('listTextNight')
      } )
      document.querySelectorAll('.listCheckDesign').forEach( item => {
        item.classList.remove('listDesignDay')
        item.classList.add('listDesignNight') 
      } )
      document.querySelectorAll('.listItem').forEach( item => {
        item.classList.remove('listBorderDay')
        item.classList.add('listBorderNight') 
      } )
      document.querySelectorAll('.tailItemText').forEach( item => {
        item.classList.remove('tailItemTextDay')
        item.classList.add('tailItemTextNight') 
      } )
    } else {
      document.querySelector('.listMode').classList.remove('dayIcon')
      document.querySelector('.listMode').classList.add('nightIcon')
      document.querySelector('.headerContainer').classList.remove('headerNight')
      document.querySelector('.headerContainer').classList.add('headerDay')
      document.querySelector('.App').classList.remove('bgNightMode')
      document.querySelector('.App').classList.add('bgDayMode')
      
      document.querySelectorAll('.tailText').forEach( item => {
        item.classList.remove('tailTextNight')
        item.classList.add('tailTextDay')
      } )
      document.querySelectorAll('.listBg').forEach( item => {
        item.classList.remove('listBgNight')
        item.classList.add('listBgDay')
      } )
      document.querySelectorAll('.listText').forEach( item => {
        item.classList.remove('listTextNight')
        item.classList.add('listTextDay') 
      } )
      document.querySelectorAll('.listCheckDesign').forEach( item => {
        item.classList.remove('listDesignNight')
        item.classList.add('listDesignDay') 
      } )
      document.querySelectorAll('.listItem').forEach( item => {
        item.classList.remove('listBorderNight')
        item.classList.add('listBorderDay') 
      } )
      document.querySelectorAll('.tailItemText').forEach( item => {
        item.classList.remove('tailItemTextNight')
        item.classList.add('tailItemTextDay') 
      } )
    }
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

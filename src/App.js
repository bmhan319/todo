import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ToDo />
      </div>
    )
  }
}

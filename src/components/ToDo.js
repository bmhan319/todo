import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div className="todoComponent">
        <div className="todoContainer">

          <div className="titleContainer">
            <h1 className="listTitle">TODO</h1>
            <div className="listMode dayIcon"></div>
          </div>

          <div className="listInputContainer">
            <input className="listSubmit" type="submit" value="." />
            <input className="listInput" type="text" placeholder="Create a new todo..." />
          </div>

        </div>
      </div>
    )
  }
}

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
            <button className="listCheckDesign listSubmit" type="submit">
              <svg className="listSubmitCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path className="strokeOff listSubmitPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
              </svg>
            </button>
            <input className="listInput" type="text" placeholder="Create a new todo..." />
          </div>

          <ul className="listContainer">
            <li className="listItem">
              <button className="listCheckDesign listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem">
              <button className="listCheckDesign listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem">
              <button className="listCheckDesign listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem">
              <button className="listCheckDesign listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem">
              <button className="listCheckDesign listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            
            <li className="listTailItem">
              <p className="tailItemText itemsLeft">5 items left</p>
              <p className="tailItemText completedItemsClear">Clear Completed</p>
            </li>

          </ul>

          <div className="sortContainer">
            <div className="sortTextContainer">
              <p className="sortText sortAll">All</p>
              <p className="sortText sortActive">Active</p>
              <p className="sortText sortCompleted">Completed</p>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

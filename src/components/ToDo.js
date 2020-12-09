import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div className="todoComponent">
        <div className="todoContainer">

          <div className="titleContainer">
            <h1 className="listTitle">TODO</h1>
            <div className="listMode dayIcon" onClick={()=>{this.props.changeMode(1)}}></div>
          </div>

          <div className="listInputContainer listBg listBgNight">
            <button className="listCheckDesign listDesignNight listSubmit" type="submit">
              <svg className="listSubmitCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path className="strokeOff listSubmitPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
              </svg>
            </button>
            <input className="listInput listText listTextNight listBg listBgNight" type="text" placeholder="Create a new todo..." />
          </div>

          <ul className="listContainer listBg listBgNight">
            <li className="listItem listBorderNight">
              <button className="listCheckDesign listDesignNight listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject listText listTextNight">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem listBorderNight">
              <button className="listCheckDesign listDesignNight listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject listText listTextNight">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem listBorderNight">
              <button className="listCheckDesign listDesignNight listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject listText listTextNight">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem listBorderNight">
              <button className="listCheckDesign listDesignNight listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject listText listTextNight">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            <li className="listItem listBorderNight">
              <button className="listCheckDesign listDesignNight listItemComplete" type="submit">
                <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className="strokeOff listItemPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </button>
              <p className="listItemSubject listText listTextNight">Jog around the park 3x</p>
              <div className="closeIcon"></div>
            </li>
            
            <li className="listTailItem">
              <p className="tailItemText tailItemTextNight itemsLeft">5 items left</p>
              <p className="tailItemText tailItemTextNight completedItemsClear tailText tailTextNight">Clear Completed</p>
              <div className="sortContainer listBg listBgNight">
                <div className="sortTextContainer">
                  <p className="sortText tailText tailTextNight sortAll">All</p>
                  <p className="sortText tailText tailTextNight sortActive">Active</p>
                  <p className="sortText tailText tailTextNight sortCompleted">Completed</p>
                </div> 
              </div>
            </li>

          </ul>

          
        </div>
      </div>
    )
  }
}

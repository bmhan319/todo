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

          <form className="listInputContainer listBg listBgNight" onSubmit={ this.props.handleSubmit }>
            <button className="listCheckDesign listDesignNight listSubmit" type="submit"  >
              <svg className="listSubmitCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path className="strokeOff listSubmitPath" fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
              </svg>
            </button>
            <input id="listInput" className="listInput listText listTextNight listBg listBgNight" onChange={ this.props.handleChange } type="text" placeholder="Create a new todo..." />
          </form>

          <ul className="listContainer listBg listBgNight">
            { this.props.state.list.map( (item,ind) => (
              <li key={ind + item.todo} className={`listItem listBorderNight listItem${ind}`} data-status={item.status} >
                <button className={`listCheckDesign listDesignNight listItemComplete ${item.listComplete} listComplete${ind}`} type="button" onClick={ ()=>{this.props.complete(ind)} } >
                  <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path className={`${item.stroke} listItemPath listItemPath${ind}`} fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                  </svg>
                </button>
                <p className={`${item.strikeThrough} listItemSubject listItemSubject${ind} listText listTextNight`} >{item.todo}</p>
                <div className="closeIcon" onClick={ ()=>{this.props.close(ind)} } ></div>
              </li>
            ) ) }
            
            <li className="listTailItem">
              <p className="tailItemText tailItemTextNight itemsLeft">{this.props.state.list.length} items left</p>
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

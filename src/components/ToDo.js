import React, { Component } from 'react'

export default class Todo extends Component {
  //Creating keyboard functionality to run the filter sort function
  onKeyPress = (e) => {
    const status = e.target.dataset.filter
    if (e.charCode === 13){
      this.props.filter(status)
    }
  }

  //Upon deleting all list items, Empty list element is displayed
  reset = () => {
    let items = document.querySelectorAll('.listItem')
    if (items.length === 0) {document.querySelector('.emptyList').style.display = "flex"}
  }

  //Runs the Reset function if a component is updated
  componentDidUpdate() {
    this.reset()
  }
  
  render() {
    return (
      <div className="todoComponent">
        <div className="todoContainer">

          <div className="titleContainer">
            <h1 className="listTitle">TODO</h1>
            <div className={`listMode icon${this.props.state.mode}`} onClick={this.props.changeMode}></div>
          </div>

          <form className={`listInputContainer inputError inputError${this.props.state.inputError} listBg${this.props.state.mode}`} onSubmit={ this.props.handleSubmit }>
            <button tabIndex="-1" className={`listCheckDesign listDesign${this.props.state.mode} listSubmit`} type="submit"  >
              <div className={`innerButton innerButton${this.props.state.mode}`}>
                <svg className="listSubmitCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                  <path className={`strokeNotDone listSubmitPath`} fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                </svg>
              </div>
            </button>
            <input id="listInput" className={`listInput inputText${this.props.state.mode} listBg${this.props.state.mode}`} onChange={ this.props.handleInput } type="text" placeholder="Create a new todo..." />
          </form>

          <ul className={`listContainer listBg${this.props.state.mode}`}>
            <li className={`listBorder${this.props.state.mode} emptyList${this.props.state.mode} emptyList`}>
              You have no tasks on your To-do list. Yeah! <br />
              Add a task in the input form above.
            </li>
            { this.props.state.list.map( (item,ind) => (
              <li key={ind + item.todo} className={`listItem listBorder${this.props.state.mode} listItem${ind}`} data-status={item.status} style={{display: item.display}} >
                <button tabIndex="0" className={`listTab listCheckDesign listDesign${this.props.state.mode} listItemComplete checkBg${item.status} listComplete${ind}`} type="button" onClick={ ()=>{this.props.complete(ind)} } >
                  <div className={`innerButton innerButton${ind} innerButton${this.props.state.mode} button${item.status}`} >
                    <svg className="listItemCheck" xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                      <path className={`stroke${item.status} listItemPath listItemPath${ind}`} fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
                    </svg>
                  </div>
                </button>
                <p className={`strike${item.status}ListText${this.props.state.mode} listItemSubject listItemSubject${ind} listText${this.props.state.mode}`} >{item.todo}</p>
                <div tabIndex="0" className="closeIcon" onKeyPress={ ()=>{this.props.close(ind)} } onClick={ ()=>{this.props.close(ind)} } ></div>
              </li>
            ) ) }
            
            <li className="listTailItem">
              <p className={`tailItemText tailItemText${this.props.state.mode} itemsLeft`}>{this.props.state.list.length} items left</p>
              <p tabIndex="0" onKeyPress={this.onKeyPress}  onClick={ ()=>{this.props.filter('Clear')} } className={`tailItemText tailItemText${this.props.state.mode} completedItems completedItems${this.props.state.mode}`} data-filter="Clear">Clear Completed</p>
              <div className={`sortContainer listBg${this.props.state.mode}`}>
                <div className="sortTextContainer">
                  <p tabIndex="0" onKeyPress={this.onKeyPress} onClick={ ()=>{this.props.filter('All')} } className={`sortText tailText tailText${this.props.state.mode} sortClear sortAll`} data-filter="All" >All</p>
                  <p tabIndex="0" onKeyPress={this.onKeyPress} onClick={ ()=>{this.props.filter('Active')} } className={`sortText tailText tailText${this.props.state.mode} sortActive`} data-filter="Active" >Active</p>
                  <p tabIndex="0" onKeyPress={this.onKeyPress} onClick={ ()=>{this.props.filter('Complete')} } className={`sortText tailText tailText${this.props.state.mode} sortComplete`} data-filter="Complete" >Completed</p>
                </div> 
              </div>
            </li>

          </ul>

          
        </div>
      </div>
    )
  }
}

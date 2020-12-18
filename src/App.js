import React, { Component } from 'react'
import Header from './components/Header'
import ToDo from './components/ToDo'
import './css/header.css'
import './css/todo.css'

export default class App extends Component {
  state= {
    isDark: true,
    input: "",
    list: [],
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
      inputError.classList.remove('inputErrorOff')
      inputError.classList.add('inputErrorOn')
      document.querySelector('.listInputContainer').style.border = "2px solid orange"
    } else {
      inputError.classList.remove('inputErrorOn')
      inputError.classList.add('inputErrorOff')
      document.querySelector('.listInputContainer').style.border = "0"
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
          'display': 'flex'
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

    dupeArray[num].status = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "done" : "notDone"
    dupeArray[num].stroke = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strokeOn" : "strokeOff"
    dupeArray[num].listComplete = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "listComplete" : "listNotComplete"
    dupeArray[num].strikeThrough = (document.querySelector('.listItem' + num).dataset.status === 'notDone') ? "strikeOn" : "strikeOff"
    
    this.setState({
      list: dupeArray
    })

    document.querySelector('.listItemPath' + num).classList.add(this.state.list[num].stroke)   
    document.querySelector('.listComplete' + num).classList.add(this.state.list[num].listComplete)
    document.querySelector('.listItemSubject' + num).classList.add(this.state.list[num].strikeThrough)
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

  changeMode = () => {
    this.setState({
      isDark: !this.state.isDark
    })
    if(this.state.isDark === false) {
      document.querySelector('.listMode').classList.remove('nightIcon')
      document.querySelector('.listMode').classList.add('dayIcon')
      document.querySelector('.headerContainer').classList.remove('headerDay')
      document.querySelector('.headerContainer').classList.add('headerNight')
      document.querySelector('.App').classList.remove('bgDayMode')
      document.querySelector('.App').classList.add('bgNightMode')
      document.querySelector('.emptyList').classList.remove('emptyListDay')
      document.querySelector('.emptyList').classList.add('emptyListNight')
      
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
      document.querySelector('.emptyList').classList.remove('emptyListNight')
      document.querySelector('.emptyList').classList.add('emptyListDay')
      
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
              handleSubmit={this.handleSubmit} 
              filter={this.filter} />
      </div>
    )
  }
}

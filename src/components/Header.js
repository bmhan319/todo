import React from 'react'

export default function Header(props) {
  return (
    <div className="headerComponent">
      <div className={`headerContainer header${props.state.mode}`}></div>
    </div>
  )
}

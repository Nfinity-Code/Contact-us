import React from 'react'
import { useState } from 'react'

const Header = (props) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };
  return (
    <div className={`container-fluid shadow d-flex flex-column flex-md-row justify-content-md-between align-items-center text-center bg-${props.darkMode ? 'dark' : ''} text-${props.darkMode ? 'white' : ''}`} style={{transition:"background-color 0.5s ease-in"}}>
    <h1 className="heading p-3 fw-bold mx-auto mb-3 mb-md-0">Contact Manager</h1>
    <div className="form-check form-switch">
      <input
        className="form-check-input mb-2"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={props.toggleDarkMode}
      />
      <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">
         Dark Mode
      </label>
    </div>
  </div>
  )
}

export default Header

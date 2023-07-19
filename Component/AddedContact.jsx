import React from 'react'
import { useState,useEffect } from 'react'

const AddedContact = (props) => {
  const[userInput ,setUserInput]=useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    if(userInput.name=="" || userInput.email==""){
      alert("All fields are mandatory!")
    }else{
      const { name, email } = userInput;
      setUserInput({
        name:"",
        email:""   
      })
  props.handleContacts(userInput.name, userInput.email);

    }
    
    
  };
  const handleChangeName = (e) => {
    // Do something with the changed value, for example, update the state.
    setUserInput({ ...userInput, name: e.target.value });
  };
  const handleChangeEmail = (e) => {
    // Do something with the changed value, for example, update the state.
    setUserInput({ ...userInput, email: e.target.value});
  };
    
  return (
    <div>
      <h3 className="p-2">Add Contact</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder='Name' value={userInput.name} onChange={(e) => handleChangeName(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder='Email' value={userInput.email} onChange={(e) => handleChangeEmail(e)}   />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  )
}

export default AddedContact

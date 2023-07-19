import React from 'react'
import ContactCard from './ContactCard';
import { useState } from 'react'

const ContactList = (props) => {
  
  return (
    <div>
      <h5 className='my-2'><u>Contact List</u></h5>
      {props.Contacts.map((contact)=>(<ContactCard 
        key={contact.id} name={contact.name} email={contact.email}
        id={contact.id} remove={props.DeleteContact} /> 
 ))}
    </div>
  )
}


export default ContactList

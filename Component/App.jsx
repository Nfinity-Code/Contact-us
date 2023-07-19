import { useState } from 'react'
import { useEffect } from 'react'
import AddedContact from './AddedContact'
import './App.css'
import Header from "./Header"
import ContactList from './ContactList'
import { v4 as uuidv4 } from 'uuid';



function App() {
 // Load initial Contacts state from local storage or use an empty array if it's not present
 const initialContacts = JSON.parse(localStorage.getItem('contacts')) || [];
  const [Contacts, setContacts] = useState(initialContacts)
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(Contacts));
  }, [Contacts]);    
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
 const handleContacts=(name,email)=>{
 setContacts((prevcontacts)=>[...prevcontacts,{
    id:uuidv4(),
    name: name,
    email: email,
  }])
    }
    // DELETING WITH HELP OF TRASH CAN
const DeleteContact=(id)=>{
  const DeleteCard=Contacts.filter((contact)=>{
return contact.id!==id
  })
  setContacts(DeleteCard)
}
   

  return (
    <>
  <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
  <div className={`mx-0 px-2  text-${darkMode ? 'white' : 'black'}`}   style={{ transition:"background-color 0.5s ease-in", height:"100vh",background: darkMode ? "#343a40" : "" }}>
  <AddedContact handleContacts={handleContacts} />
  <ContactList Contacts={Contacts} DeleteContact={DeleteContact}/>
  </div>
    </>
  )
}

export default App

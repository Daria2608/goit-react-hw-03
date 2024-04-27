import initialContacts from '../../contacts.json'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import { useState, useEffect } from 'react'
import css from './App.module.css'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contactList')
    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    }
    return initialContacts
  })

  const [searchValye, setSearchValue] = useState(" ")
  const searchContact = contacts.filter((contact) => contact.name.toLowerCase().includes(searchValye.toLowerCase()))

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter(contact => contact.id !== contactId)
    })
  }

  return (
    <div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={searchValye} onSearch={setSearchValue} />
      <ContactList contacts={searchContact} onDelete={deleteContact} />
</div>

  )
}


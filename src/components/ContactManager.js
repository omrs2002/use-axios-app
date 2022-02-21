import AddPersonForm from './AddPerson'
import  PeopleList from './PeopleList'
import React, { useState } from 'react';
import  '../Styles/ContactM.css'

function ContactManager(props) {
    const [contacts, setContacts] = useState(props.data);

    function addPerson(name) {
        //Create new array from existing array + more elements
        // /let Array1 = [ 1, 2, 3]; //1,2,3
        //Ex: let newArray = [...Array1, 7, 8]; //1,2,3,7,8
        setContacts([...contacts, name]);
      };

      return (
        <div>
          <h1>Contact Manager</h1>
          <br></br>
          <AddPersonForm handleSubmit={addPerson} />
          <PeopleList data={contacts} />
        </div>
      );

  } export default ContactManager;
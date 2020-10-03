import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      console.log(res.data);
      setPersons(res.data);
      setSearch(res.data);
    });
  }, []);

  const addNewName = (event) => setNewName(event.target.value);
  const addNewNumber = (event) => setNewNumber(event.target.value);
  const addContact = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      let x = { name: newName, number: newNumber };
      setPersons(persons.concat(x));
      setSearch(persons.concat(x));
      setNewName("");
      setNewNumber("");
    }
  };

  const filterResults = (event) => {
    const result = persons.filter((el) => {
      return el.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearch(result);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterResults={filterResults} />
      <h3>Add a new</h3>
      <PersonForm
        addNewName={addNewName}
        addContact={addContact}
        newName={newName}
        addNewNumber={addNewNumber}
        newNumber={newNumber}
      />

      <h3>Numbers</h3>
      <Persons search={search} data={persons} />
    </div>
  );
};

export default App;

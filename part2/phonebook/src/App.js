import React, { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState(persons);

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
      <Persons search={search} />
    </div>
  );
};

export default App;

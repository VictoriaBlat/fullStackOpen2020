import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import phoneService from "./services/phoneService";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState();

  useEffect(() => {
    phoneService.getAll().then((res) => {
      setPersons(res);
      setSearch(res);
    });
  }, []);

  const addNewName = (event) => setNewName(event.target.value);
  const addNewNumber = (event) => setNewNumber(event.target.value);

  const addContact = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      let newPerson = { name: newName, number: newNumber };

      phoneService.create(newPerson).then((res) => {
        console.log(res);
        setPersons(persons.concat(res));
        setSearch(persons.concat(res));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const filterResults = (event) => {
    const result = persons.filter((el) => {
      return el.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearch(result);
  };

  const deleteNumber = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name}?`)) {
      phoneService.deleteNumber(id).then((res) => {
        const newData = persons.filter((el) => {
          return el.id !== id;
        });

        setPersons(newData);
        setSearch(newData);
        console.log("deleted", res);
      });
      console.log("okay!!!");
    } else console.log("nope");
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
      <Persons deleteNumber={deleteNumber} search={search} data={persons} />
    </div>
  );
};

export default App;

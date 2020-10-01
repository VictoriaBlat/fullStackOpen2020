import React, { useState } from "react";

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
  const addContact = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setNewName("");
      setNewNumber("");
      setSearch(persons);
    }
  };

  const filterResults = (event) => {
    console.log(event.target.value);
    const result = persons.filter((el) => {
      console.log(el.name);
      return el.name.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setSearch(result);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          {" "}
          filter shown with
          <input onChange={filterResults} />
          <div></div>
        </div>
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>

        <div>
          <button onClick={addContact} type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {search.map((el) => {
        return (
          <div>
            {el.name}
            {"  "}
            {el.number}
          </div>
        );
      })}
    </div>
  );
};

export default App;

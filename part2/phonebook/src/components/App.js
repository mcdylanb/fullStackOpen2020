import React, { useState, useEffect } from "react";
import axios from "axios";

const Person = ({ name, number }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then(response => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const checkIfNameUsed = () => {
    let answer = false;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        answer = true;
      }
    }
    return answer;
  };

  const addPerson = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    console.log(checkIfNameUsed());
    if (checkIfNameUsed()) {
      alert(`${newName} is already used`);
      setNewName("");
      setNewNumber("");
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleChangeName = event => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleChangeNumber = event => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const personsToShow = showAll
    ? persons
    : persons.filter(note => note.import === true);

  return (
    <div>
      <h2> Phonebook</h2>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Phonebook</h2>
      <table>
        <thead>
          <tr>
            <td> Name</td>
            <td>Number</td>
          </tr>
        </thead>
        <tbody>
          {personsToShow.map(persons => (
            <Person
              key={persons.id}
              name={persons.name}
              number={persons.number}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

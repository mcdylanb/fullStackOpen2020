import React, {useState} from 'react'

const Person = ({ name, number }) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{number}</td>
    </tr>
  )
}

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '911',
      id: 1
    }
  ])
  const [newName, setNewName ] = useState('')
  const [newNumber, setNewNumber ] = useState('')

  const checkIfNameUsed = () => {
    let answer = false
    for (let i = 0; i < persons.length; i++){
      if (persons[i].name === newName){
        answer = true
      }
    }
    return answer
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    console.log(checkIfNameUsed())
    if (checkIfNameUsed()) {
        alert(`${newName} is already used`)
        setNewName('')
        setNewNumber('')
    }else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }
  }

  const handleChangeName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
    <div>

      <h2> Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
                  value={newName}
                  onChange ={handleChangeName}
                />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange ={handleChangeNumber}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        {persons.map(persons =>
                     <Person key={persons.id} name={persons.name} number={persons.number}/>
                    )}
      </table>
    </div>
  )
}

export default App

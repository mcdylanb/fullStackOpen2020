import React, {useState} from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            id: persons.length + 1,
        }

        for (let i = 0; i < persons.length; i++){
            if (persons[i].name === newName){
                console.log("its in here")
                alert(`${newName} is already used`)
                setNewName('')
            }else {
                console.log("its not in here")
                setPersons(persons.concat(personObject))
                setNewName('')
            }
        }
    }

    const handleChangeName = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }


    return (
        <div>

          <h2> Phonebook</h2>
          <form onSubmit={addName}>
            <div>
              name: <input
                      value={newName}
                      onChange ={handleChangeName}
                    />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          <ul>
            {persons.map(persons =>
                         <li key={persons.id}> {persons.name} </li>
                        )}
          </ul>
        </div>
    )
}

export default App

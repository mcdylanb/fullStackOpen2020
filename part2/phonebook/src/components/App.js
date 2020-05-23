import React, {useState} from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName ] = useState('')

    const addName = (event) => {
        event.preventDefault()

        console.log("running add name")
        for (let i = 0; i > persons.length; i++){
            console.log("inside the for loop")
            if (newName in persons[i]){
                console.log("its in here")
            }else {
                console.log("its not in here")
            }
        }

        const personObject = {
            name: newName,
            id: persons.length + 1,
        }

        setPersons(persons.concat(personObject))
        setNewName('')
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

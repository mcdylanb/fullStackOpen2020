import React, {useState} from 'react'

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName ] = useState('')

    return (
        <div>

          <h2> Phonebook</h2>
          <form>
            <div>
              name: <input />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
          <h2>Numbers</h2>
          <ul>
        {persons.map(persons =>
                     <li> {persons.name} {persons.id}</li>
                    )}
          </ul>
        </div>
    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return(
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const Footer = () => {
    return(
        <div>
            greeting app created by <a href="https://github.com/mluukai">mluukai </a>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <h1>Greetings</h1>
            <Hello name="George" age={26 + 10}/>
            <Footer />
        </div>
    )
}    

ReactDOM.render(<App/>, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
    return (
        <div>
          <h1>{course.name}</h1>
        </div>
    )
}

const Content = ({ course }) => {
    return (
        <div>
          <ul>
            {course.parts.map((part) =>
                              <Part key={part.id} name={part.name} exercises={part.exercises}/>
                   )}
          </ul>
        </div>
    )
}

const Part = ({ name, exercises }) => {
    return (
        <div>
        <li> {name} {exercises}</li>
        </div>
    )
}

const Course = ({ course }) => {
    const total = course.parts.reduce((a,b) =>
                                      ({exercises: a.exercises + b.exercises}));
    return (
        <div>
          <Header course = {course}/>
          <Content course = {course}/>
        <strong>Total of  {total.exercises} exercises</strong>
        </div>
    )
}


const App = () => {

    const courses = [

    {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises : 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises : 14,
                id: 3
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    }
    ]
    return  (
        <div>
          {courses.map(course => <Course key={course.id} course={course}/>)}
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))

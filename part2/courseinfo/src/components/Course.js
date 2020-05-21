import React from 'react'

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

export default Course

import React from 'react';
import Course from './components/Course';

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            parts: [ 
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                }, 
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                } 
            ]
        },
        {
            name: 'Node.js',
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
        },
        {
            name: 'TypeScript',
            parts: [
                {
                    name: 'Testing with variables',
                    exercises: 5,
                    id: 1
                },
                {
                    name: 'Syntacs',
                    exercises: 4,
                    id: 2
                },
                {
                    name: 'Ending Assingment',
                    exercises: 1,
                    id: 3
                }
            ]
        }
    ]
    return (
        <div>
            <Course courses={courses} />
        </div>
    ) 
}

export default App
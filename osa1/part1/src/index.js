import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    const { name, age, education } = props.person
    const bornYear = () =>  new Date().getFullYear() - age
    
    return (
        <div>
            <p><strong>Hello, {name}!</strong></p>
            <p> You are {age} years old, {education}</p>
            <p>So you were probably born {bornYear()} </p>
        </div>
    )
}

const Time = () => {
    const now = new Date();
    return (
        <div>
            <h2>It is {now.toLocaleTimeString()}</h2>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by
            <a href="https://github.com/JuliaKuisma1"> JuliaKuisma1</a>
        </div>
    )
}

const App = () => {
    const person1 = {
        name: 'Arto Hellas',
        age: 35,
        education: 'Filosofian tohtori'
    }
    const person2 = {
        name: 'Juha Tauriainen',
        age: 20,
        education: 'Student at LAMK'
    }
 return [
        <h1>Greetings</h1>,
        <Hello person={person1}/>,
        <Hello person={person2}/>,
        <Time />,
        <Footer />
    ]
}
  

ReactDOM.render(<App />, document.getElementById('root'))
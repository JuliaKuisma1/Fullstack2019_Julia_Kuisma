import React from 'react';
import Header from './Header';
import Content from './Content ';

const Course = (props) => {
    const { courses } = props
    return (
        <div>
            <Header courses={courses} />
            <Content parts={courses} />
        </div>
    )
}

export default Course
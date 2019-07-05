import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

// get all persons from json server, return array
const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => 
        response.data);
}

// create new person object
const createPerson = newObject => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => 
        response.data);
}

// update person return 
const updatePerson = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => 
        response.data);
}

const deletePerson = id => {
    axios.delete(`${baseUrl}/${id}`, { id: { id }});
}

export default { getAll, createPerson, updatePerson, deletePerson }
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//const http = require('http');

app.use(bodyParser.json());

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browsers can execute only JavaScript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods od HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World from Finland!</h1>');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0;
    return maxId + 1;
}

app.post('/notes', (req, res) => {
    const body = req.body;
    note.id = maxId +1;
    notes = notes.concat(note);
    res.json(note);
})

app.get('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    if (note) {
        res.json(note);
    }
    else {
        res.status(404).end();
    }
});

app.delete('/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);

    res.status(204).end();
})

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on http://localhost:${PORT}`);
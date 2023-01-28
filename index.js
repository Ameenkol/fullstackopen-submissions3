const express = require('express');
const app = express();

app.use(express.json());

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  },
  {
    "id": 5,
    "name": "Ameen Garba", 
    "number": "2348161665061"
  },
  {
    "id": 6,
    "name": "Jawharat", 
    "number": "2348146467743"
  },
  {
    "id": 7,
    "name": "Hamzat",
    "number": "2348166528841"
  }
]

/* HOME ROUTE */
app.get('/', (req, res) => { 
  res.send('<h1>Welcome to our contact  home  address</h1>')
})

/* FETCH ALL RESORCE */
app.get('/api/persons', (req, res) => { 
  res.json(persons)
})

/* PHONEBOOK INFO RESORCE */
app.get('/info', (req, res) => { 
  res.send(`
  Phonebook has info for ${persons.length} persons </br>
  ${new Date()}`)
})

/* FETCH A RESORCE */
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find((person) => person.id === id)
  !id ? res.status(404).end() : res.json(person)
})

/* CREATE A RESORCE */

/* DELETE A RESORCE */
app.delete('/api/persons/:id', (req, res) => { 
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

const PORT = 3001;
app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});
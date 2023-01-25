const express = require('express');
const app = express();

app.use(express.json());

const persons = [
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

/* FETCH A RESORCE */

/* CREATE A RESORCE */

/* DELETE A RESORCE */


const PORT = 3001;
app.listen(PORT, function () {
  console.log(`app listening on port ${PORT}`);
});
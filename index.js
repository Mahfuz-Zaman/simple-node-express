const express = require("express");
const cors = require('cors');
const { json } = require("express");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello i am excited to learn node and express from my projects');
});


const users = [
    { id: 0, name: 'mahfuz', email: 'mahfuz@gmail.com', phone: '01747489696' },
    { id: 1, name: 'uzzol', email: 'uzzol@gmail.com', phone: '01747489697' },
    { id: 2, name: 'ontor', email: 'ontor@gmail.com', phone: '01747489698' },
    { id: 3, name: 'shahed', email: 'shahed@gmail.com', phone: '01747488896' },
    { id: 4, name: 'shahin', email: 'shahin@gmail.com', phone: '01747482296' },
    { id: 5, name: 'rakib', email: 'rakib@gmail.com', phone: '01747489699' }
]

// app.get('/users', (req, res) => {
//     res.send(users);
// });



//use query parameter
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

//app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)

})

//dynamic api

app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    const user = users[id];
    res.send(user);
});



app.listen(port, () => {
    console.log('Listening to port', port);
});

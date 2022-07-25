const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Hello my second exciting and learning node')
})

app.get('/users', (req, res) =>{
    // use query parameter
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

// dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

// post method
app.post('/users', (req, res) =>{
    const newUsers = req.body;
    newUsers.id = users.length;
    users.push(newUsers)
    console.log('hitting the post', req.body)
    res.json(newUsers)
})

const users = [
    {id: 0, name: 'Atik hasan', email: 'atik@gmail.com', phone: '01759393874'},
    {id: 1, name: 'Hasan Mollah', email: 'hasan@gmail.com', phone: '01759393874'},
    {id: 2, name: 'Sojib kipta', email: 'sojib@gmail.com', phone: '01759393874'},
    {id: 3, name: 'Mintu salam', email: 'salam@gmail.com', phone: '01759393874'},
    {id: 4, name: 'Harshali', email: 'harshali@gmail.com', phone: '01759393874'},
]

app.listen(port, () =>{
    console.log('Listening to the port', port)
})
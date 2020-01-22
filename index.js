const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Welcoming the user with a message using default route that returns HTML')
    res.send('<h1>Welcome to my server!</h1>')
})

app.get('/api', (req, res) => {
    console.log('Welcoming the user to my API route')
    res.json( 
        {
        Status: 'Live',
        Time: `${new Date()}`,
        Name: 'Darrin Harvard',
        Project: 'Simple Server'
        })
})


app.listen(5000);
'use strict';

const express = require('express');

const data = require('./db/notes');

const app = express();
app.use(express.static('public'));

// app.get('/api/notes', (req, res) => {
//     res.json(data);
// });

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const item = data[id];

    res.json(data.find(x => {
        return x.id === Number(id);
    }));
});

app.get('/api/notes', (req, res) => {
    console.log('test!');
    let results = data.slice();
    if (req.query.searchTerm) {
        console.log(req.query.searchTerm);
        results = results.filter( item => item.title.includes(req.query.searchTerm));
        
    }
    res.json(results);
});



// Listen for incoming connections
app.listen(8080, function () {
    console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
    console.error(err);
});
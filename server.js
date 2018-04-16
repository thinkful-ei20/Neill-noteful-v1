'use strict';

const express = require('express');

const data = require('./db/notes');

const app = express();
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(data);
});

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const item = data[id];

    res.json(data.find(x => {
        return x.id === Number(id);
    }));
});



// Listen for incoming connections
app.listen(8080, function () {
    console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
    console.error(err);
});
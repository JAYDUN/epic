const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(cors());
app.use(bodyParser());

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',//localhost
        user : 'jianshuaz',//update this to your computer user name
        password : '',
        database : 'column'
    }
});

app.get('/column/:col',(req,res) => {
    const params = req.params.col;
    const col = params === '1'? 'column1':'column2';
    db.select('*').from(col)
        .then(data => res.json(data));
});

app.post('/column',(req,res) => {
    const {item,column} = req.body;
    const col = column === '1'? 'column1':'column2';
    db(col).insert({
        item:item
    }).then(response => res.json(response))
        .catch(error => res.json(error))
})

app.delete('/column/:col/:id',(req,res) => {
    const col = req.params.col;
    const id = req.params.id;
    const column = col === '1'? 'column1':'column2';
    db(column).where('id',id).del()
        .then(response => res.json(response))
        .catch(error => res.json(error));
});

app.listen(3000,function () {
    console.log('running on 3000' );
})
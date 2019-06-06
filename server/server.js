//library imports
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose.js');


//local imports
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then( (doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });

});

app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({todos})
    }, (err) => {
        res.status(400).send(err);
    })
});


app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`);
});

// set the app property equal to the app variable
module.exports = {app};

// var user_Mudi = new User({
//     email: 'mudi.muteba@gmail.com'
// });

// //task.save();

// user_Mudi.save().then ( (doc) => {
//     console.log('\nSaved todo:\n', JSON.stringify(doc, null, 4));
// }), (err) => {
//     console.log('\nFailed to save todo\n', err);
// };
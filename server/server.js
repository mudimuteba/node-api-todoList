//library imports
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose.js');



//local imports
const {Todo} = require('./models/todo.js');
const {User} = require('./models/user.js');


const app = express();
const PORT = 5000;

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
    });
});

// GET /todos/123848445

app.get('/todos/:id', (req, res) => {
    let id = req.params.id;
    // Valid is using isvalid
        // 404 - send back empoty send();
    if (!ObjectID.isValid(id)) return res.status(404).send();

    // findById
        // success
            // if todo send it back
            // if no todo 
        // error
            // 400 - send empty body
    Todo.findById(id).then((todo) => {
        if (!todo) return res.status(404).send();
        console.log('\ntodo is\n', todo);
        console.log('\n{todo} is\n', {todo});
        res.send({todo}); //{todo: todo} so you can add other properties to the response like custom status codes
    }).catch((err) => {
        res.status(400).send();
    });
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
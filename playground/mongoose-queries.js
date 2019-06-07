const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5cfa29a6b102714784f761661';
var todoId = '5cf8f8fa1c89f04498dc54d4';

// if (!ObjectID.isValid(userId)){
//     console.log('userId not valid');
// }

if (!ObjectID.isValid(todoId)){
    console.log('todoId not valid');
}

// Todo.find({
//   _id: userId
// }).then((todos) => {
//   console.log('\nTodo.find\n', todos);
// });

// Todo.findOne({
//   _id: userId
// }).then((todo) => {
//   console.log('\nTodo.findOne\n', todo);
// });

// Todo.findById(userId).then((todo) => {
//     if (!todo) return console.log('\nTodo.findById\nERROR: userId not found\n')
//     console.log('\nTodo.findById\n', todo);
//   }).catch( (e) => console.log(e));

  User.findById(todoId).then((todo) => {
    if (!todo) return console.log('\nTodo.findById\nERROR: todoId not found\n')
    console.log('\nTodo.findById\n', todo);
  }).catch( (err) => console.log(err));
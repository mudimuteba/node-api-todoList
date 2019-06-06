const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27107/TodoApp', { useNewUrlParser: true }).then(console.log, console.error);
mongoose.connect("mongodb://127.0.0.1:27017/TodoApp", { useNewUrlParser: true });

//module.exports = {mongoose: mongoose};
module.exports = {mongoose};
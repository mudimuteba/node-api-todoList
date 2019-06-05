//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //findOneAndUpdate(filter, update, options)
    db.collection('Todos').findOneAndUpdate(
        {_id: new ObjectId("5cf785595704b93ae04eca4f")}, //filter
        {$set: {completed: true}}, //update
        {returnOriginal: false}).then( (result) => { //options
            console.log('findOneAndUpdate result is:\n', result);
        });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectId("5cf50516485d784245aa3350")},
        {
            $set: {name: 'Mudi'},
            $inc: {age: 1}
        },
        {returnOriginal: false});

    //client.close();
});
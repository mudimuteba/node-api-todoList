//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

/* var objID = new ObjectID();
console.log('custom Object ID is', objID); */

// MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
//     if (err)
//         return console.log('Unable to connect to MongoDB server');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne(
        {
            text: 'Eat frogs',
            Completed: false
        }, (err, result) => {
        if (err)
            return console.log('Unable to insert todo. Error message:', err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //db.collection('Users').insertOne({}, (err, result) => {});

    db.collection('Users').insertOne(
        {
            name: 'HotSauce',
            age: 2000,
            location: 'Compton'
        }, (err, result) => {
            if (err)
                return console.log('Unable to insert user. Error message:', err);
            console.log(JSON.stringify(result.ops, null/*undefined*/, 4));
            console.log('\nTimestamp is', result.ops[0]._id.getTimestamp());
    });



    //db.close(); //old Mongo v2 way
    client.close();
});
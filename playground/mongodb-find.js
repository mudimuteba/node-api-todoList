//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5cf4faead0a32824a9077d0a')
    // }).toArray().then( (docs) => {
    //     console.log('Todos:\n', JSON.stringify(docs, null, 4));
    // }, (err) => {
    //     console.log('Unable to fetch todos. Error message:', err);
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos. Error message:', err);
    // });

    db.collection('Users').find({name: 'HotSauce'}).toArray().then( (docs) => {
        console.log('HotSauce\'s todos:\n', JSON.stringify(docs, null, 4));
    }, (err) => {
        console.log('Unable to fetch users. Error message:', err);
    });

    client.close();
});
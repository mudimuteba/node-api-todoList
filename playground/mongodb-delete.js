//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err)
        return console.log('Unable to connect to MongoDB server');
    
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
   // deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
//        console.log(result);
//    });

    //deleteMany exercise
    db.collection('Users').deleteMany({name: 'Andrew'}).then ((result) => {
        console.log(`\ndeleteMany result:\n`, result);
    });

   // deleteOne
//    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then( (result) => {
//         console.log(result);
//    });

   // findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
//         console.log(result);
//    });

    //fineOneAndDelete exercise
    db.collection('Users').findOneAndDelete({_id: new ObjectId("5cf78e3d5704b93ae04ecc2f")}).then( (result) => {
        console.log(`\nfineOneAndDelete specified id result:\n`, JSON.stringify(result, null, 4));
    });
    
    //client.close();
});
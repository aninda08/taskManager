//CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error)
        return console.log('Unable to connect to the database!');

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Aninda',
    //     age: 27
    // }, (error, result) => {
    //     if(error)
    //         return console.log('Unable to insert user');

    //     console.log(result.ops._id);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'task 2',
    //         completed: false
    //     },
    //     {
    //         description: 'task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error)
    //         return console.log('Unable to insert tasks');

    //     console.log(result.ops._id);
    // });


    // db.collection('users').findOne({name:'Aninda'}, (error, user) => {
    //     if(error)
    //         return console.log('Unable to fetch user!!');

    //     console.log(user);
    // });

    // db.collection('tasks').find({ completed:true}).toArray((error, tasks) => {
    //     if(error)
    //         return console.log('Unable to fetch tasks!!');

    //     console.log(tasks);
    // });

    
    const updatePromise = db.collection('users').updateOne({
         _id: new ObjectID("5ee518c5b55bf239f8f88713")
        }, 
        {
             $set: {
                 name:'Rahul' 
             }
        });

      updatePromise.then((result) => {
        console.log(result);
      }).catch((error) => {
          console.log(error);
      });
});
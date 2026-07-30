//CRUD operations

import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = 'mongodb://127.0.0.1:27018';
const database = 'task-manager';

const id = new ObjectID();

async function main() {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();

        const db = client.db(database);
        const user = (await db.collection('users').find({ age: 49}).toArray()).length;

        console.log(user);
    } catch (error) {
        console.log('unable to connect to database or fetch document');
    } finally {
        await client.close();
    }
}

main();


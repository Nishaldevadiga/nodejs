//CRUD operations

import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const ObjectID=mongodb.ObjectId;

const connectionURL = 'mongodb://127.0.0.1:27018';
const database = 'task-manager';

const id=new ObjectID();
console.log("id",id);
console.log(id.getTimestamp());

async function main() {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();
        const db = client.db(database);

        const result = await db.collection('users').insertOne(
            {
                _id:id,
                name: 'king kong',
                age: 49

            }
        );

        console.log(result.insertedIds);

        console.log('document inserted');
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main();

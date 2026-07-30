//CRUD operations

import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27018';
const database = 'task-manager';

async function main() {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();
        const db = client.db(database);

        await db.collection('users').insertOne({
            name: 'iop',
            age: 29
        })

        console.log('document inserted');
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main();

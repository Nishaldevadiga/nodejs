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

        const result = await db.collection('users').insertMany([
            {
                name: 'pushpa',
                age: 49

            }, {
                name: 'sukumar',
                age: 55
            }
        ]);

        console.log(result.insertedIds);

        console.log('document inserted');
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main();

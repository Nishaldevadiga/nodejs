//CRUD operations

import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27018';
const database = 'task-manager';

async function main() {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();
        console.log('success');
    } catch (err) {
        console.log('error');
    }
}

main();

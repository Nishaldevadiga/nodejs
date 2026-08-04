//CRUD operations

import * as mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

const id = new ObjectID();

async function main() {
    const client = new MongoClient(connectionURL);

    try {
        await client.connect();

        const db = client.db(database);
        //6a6b91bd40ad6d28ee11f33d
        const updateResult = await db.collection('users').updateOne({
            _id: new ObjectID("6a6b91bd40ad6d28ee11f33d")
        }, {
            $set: {
                name: 'iop modified'
            }
        })

        console.log(updateResult);


    } catch (error) {
        console.log('unable to connect to database or fetch document');
    } finally {
        await client.close();
    }
}

main();


import Surreal from 'surrealdb.js';
import dotenv from 'dotenv';

import { interests_list } from './data/interests.js';

dotenv.config();

const db = new Surreal(`${process.env.SURREALDB_URL}/rpc`);

async function main() {
    try {
        console.log('Connecting to SurrealDB...');

        // Sign in to SurrealDB
        await db.signin({ user: process.env.SURREALDB_USERNAME, pass: process.env.SURREALDB_PASSWORD });

        console.log('Connected to SurrealDB!');
        // Use the dev namespace and the app database
        await db.use('dev', 'app');

        for (let interest of interests_list) {
            let created = await db.query(`CREATE interests CONTENT {
                name: "${interest['interest']}",
                category: "${interest['category']}"
            }`);

            JSON.stringify(created);

            console.log(JSON.stringify(created));
        }

    } catch (e) {
        console.log(e);
    }

    return;
}

main();




import Surreal from 'surrealdb.js';
import dotenv from 'dotenv';

import { clubs_list } from './data/ucsd/clubs.js';

dotenv.config();

const db = new Surreal(`${process.env.SURREALDB_URL}/rpc`);

async function main() {
    try {
        // Sign in to SurrealDB
        await db.signin({ user: process.env.SURREALDB_USERNAME, pass: process.env.SURREALDB_PASSWORD });

        // Use the dev namespace and the app database
        await db.use('dev', 'yw3rjh7mgbfnosdnl5mi');

        for (let club of clubs_list) {
            let created = await db.query(`CREATE clubs CONTENT {
                name: "${club['name']}",
                category: "${club['type']}"
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




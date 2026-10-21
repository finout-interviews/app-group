/** `npm run show-db` — the rows every run starts from. The DB is in memory and reseeded each run. */
import { db, seedRows } from '../src/db/mock-db.ts';

db.reset(seedRows());

console.log('--- cost rows (team "" = untagged) ---');
console.table(Object.fromEntries(db.rows.map(({ id, ...rest }) => [id, rest])));

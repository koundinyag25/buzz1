const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@127.0.0.1:5432/buzz1';

const client = new pg.Client(connectionString);
client.connect();

const query = client.query('INSERT INTO words (id,word,defiiation,level_id) VALUES
    (1,'abash','derogate',1),
  (2,'abysmal','deep gorge',1),
  (3,'abash','embarrass',1),
  (4,'abate','subside or moderate',1),
  (5,'abbreviate','shorten',1)');

query.on('end', ()=>{
  client.end();
  console.log('Your table has been created');
});

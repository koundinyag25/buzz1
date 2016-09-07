var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@127.0.0.1:5432/buzz1';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE words (id SERIAL, word VARCHAR not null,definition VARCHAR not null, word_id int, difficulty int)');
query.on('end', ()=> {
  client.end();
  console.log('Your table has been created');
});

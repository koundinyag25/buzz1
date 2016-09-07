const promise = require('bluebird');
let options = {
  promiseLib: promise
};
const pgPromise = require('pg-promise')(options);
const connectString = 'postgresql://postgres:postgres@127.0.0.1:5432/buzz1';
const db = pgPromise(connectString);

function getAllWords(req,res,next){
  console.log('the',req.params.key);
  let word_id = req.params.key;
  db.query('SELECT * FROM words WHERE word_id=($1)',[word_id])
  .then((data)=>{
    res.status(200).json({
      data: data
    });
  }).catch((err)=> next(err));
};

function getWordsForDifficulty(req,res,next){
  console.log('boop', req.params);
  let word_id = req.params.key;
  let difficulty = req.params.diff;

  db.query('SELECT * FROM words WHERE word_id=($1) AND difficulty=($2)',[word_id,difficulty])
  .then((data)=>{
    res.status(200).json({
      data: data
    });
  }).catch((err)=> next(err));

}




module.exports = {
  getAllWords : getAllWords,
  getWordsForDifficulty : getWordsForDifficulty
}

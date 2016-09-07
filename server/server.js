const express = require('express');
const path = require('path');
const app = express();
const routes = require('./index.js');
const pg =require('pg');
const connectString = 'postgresql://postgres:postgres@127.0.0.1:5432/postgres';
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin,X-Requested_With, Content-Type, Accept');
  next();
});

app.use('/',routes);







app.listen('3000',()=> console.log('Server is listening on port 3000'));

const express=require('express');
const mongoose=require('mongoose');


const items=require('./routes/api/items');
const users=require('./routes/api/users');
const config=require('config');

const app=express();

app.use(express.json());


const db=config.get('mongoURI');

mongoose.connect(db,{
  useNewUrlParser: true,
  useCreateIndex:true,
  useUnifiedTopology: true 
})
     .then(()=>console.log('MongoDb Connected'))
     .catch(err=>console.log(err));


app.use('/api/items',items);
app.use('/api/users',users);
app.use('/api/auth',require('./routes/api/auth'));
const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));


/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@selene.fac4d.mongodb.net/Selene?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useCreateIndex:true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Selene").collection("users");
  // perform actions on the collection object
  console.log('mongodb ok');
  client.close();
});*/



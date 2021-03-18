const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const items=require('./routes/api/items');

const app=express();

app.use(bodyParser.json());


// const db=require('./config/keys').mongoURI;

/*mongoose.connect(db)
     .then(()=>console.log('MongoDb Connected'))
     .catch(err=>console.log(err));
*/

app.use('/api/items',items);
const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@selene.fac4d.mongodb.net/Selene?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Selene").collection("items");
  // perform actions on the collection object
  console.log('mongodb ok');
  client.close();
});



const express=require('express');
const mongoose=require('mongoose');
//nou
const errorHandler=require('./middleware/error');

//const items=require('./routes/api/items');
//const users=require('./routes/api/users');
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


//app.use('/api/items',require('./routes/api/items'));
//app.use('/api/users',users);


//NOU

app.use('/api/auth',require('./routes/api/auth'));
//nou
app.use('/api/items',require('./routes/api/items'));


app.use('/api/private',require('./routes/api/private'));
//error handler(should be last piece of middleware)
app.use(errorHandler);



const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server started on port ${port}`));





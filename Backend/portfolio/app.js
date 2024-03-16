const express= require('express');
const details=require('./routes/detail')
const app=express();
const cors=require('cors');

const port=3000;
app.use(cors());
app.use('/portfolio',details)

app.listen(port,()=>{
    console.log("Server Started");
});

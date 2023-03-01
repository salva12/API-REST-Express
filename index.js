const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req,res)=>{
  res.send('Hola mi server en expess');
})

app.get('/nueva-ruta', (req,res)=>{
  res.send('Nuevo endpoint');
})

app.get('/products', (req,res)=>{
  res.json({
    name:"Microphone",
    price:1200
  });
})

app.listen(port, ()=>{
  console.log('Mi port' + port);
})

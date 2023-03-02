const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;


routerApi(app);

app.get('/', (req,res)=>{
  res.send('Hola mi server en expess');
})

app.get('/nueva-ruta', (req,res)=>{
  res.send('Nuevo endpoint');
})

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
})

app.get('/users', (req,res)=>{
  const {limit, offset} = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  } else{
    res.send('Parametros vacios');
  }
})

app.listen(port, ()=>{
  console.log('Mi port ' + port);
});

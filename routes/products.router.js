const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  const {size} = req.query;
  const limit = size || 10;
  const products = [
    {
      "id": 1,
      "name": "manzanas",
      "shopId": 1
    },
    {
      "id": 2,
      "name": "peras",
      "shopId": 1
    },
    {
      "id": 3,
      "name": "escoba",
      "shopId": 2
    },
    {
      "id": 4,
      "name": "detergente",
      "shopId": 2
    }
  ];
  res.json(products.splice(0,limit));
})

router.get('/:id', (req,res)=>{
  const {id} = req.params;
  res.json({
      id,
      name:"Guitar",
      price:5600
    });
});

router.post('/',(req,res)=>{
  const body = req.body;
  res.json({
    messge:'created',
    data:body
  });
})

router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message:'update',
    data:body,
    id
  });
})

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
    message:'deleted',
    id
  });
})

module.exports = router;

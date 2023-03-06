class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    this.products = [
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
      },
      {
        "id": 18,
        "name": "teclado",
        "shopId": 8
      }
    ];
  }

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item =>item.id == id);
  }

  update(){

  }

  delete(){

  }

}
module.exports = ProductsService;

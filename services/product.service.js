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

  create(data){
    let ids = [];
    this.products.map(item =>ids.push(item.id));
    let idMax = Math.max(...ids);
    const newProduct = {
      id:idMax+1,
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item =>item.id == id);
  }

  update(id,changes){
    const index = this.products.findIndex(item =>item.id==id);
    if(index===-1){
      throw new Error('product not found')
    }
    this.products[index]={
      ...this.products[index],
      ...changes
    };
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item =>item.id==id);
    if(index===-1){
      throw new Error('product not found')
    }
    this.products.splice(index,1);
    return {id};
  }

}
module.exports = ProductsService;

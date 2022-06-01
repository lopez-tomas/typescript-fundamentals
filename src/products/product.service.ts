import { Product } from './product.model';

let lastProductId: number = 1;
let products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
  lastProductId++;
}

const removeProduct = (id: number) => {
  products = products.filter(product => product.id !== id);
}

const calculateTotalStock = ():number => {
  let total: number = products.reduce((acc, product) => acc + product.stock, 0);

  return total;
}

export {
  lastProductId,
  products,
  addProduct,
  removeProduct,
  calculateTotalStock
}

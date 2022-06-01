import { products, addProduct, removeProduct, calculateStock } from './product.service';

addProduct({
  title: 'Product test',
  createdAt: new Date(),
  stock: 12,
})

addProduct({
  title: 'Product test 2',
  createdAt: new Date(),
  stock: 20,
  size: 'XL'
})

console.log(products);
const totalStock = calculateStock();
console.log(totalStock);

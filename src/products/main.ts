import {  lastProductId, products, addProduct, removeProduct, calculateTotalStock } from './product.service';

addProduct({
  id: lastProductId,
  title: 'Product test',
  createdAt: new Date(),
  stock: 12,
})

addProduct({
  id: lastProductId,
  title: 'Product test 2',
  createdAt: new Date(),
  stock: 20,
  size: 'XL'
})

console.log(products);
const totalStock = calculateTotalStock();
console.log(totalStock);

console.log('\nSTART - removeProduct')
removeProduct(2)
console.log(products);

console.log(`\nlastProductId: ${lastProductId}`);

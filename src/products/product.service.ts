import { Product} from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
}

export const removeProduct = (data: Product) => {
  products.filter(product => product !== data);
}

export const calculateStock = ():number => {
  let total: number = products.reduce((acc, product) => acc + product.stock, 0);

  return total;
}

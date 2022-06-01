type Sizes = 'S' | 'M' | 'L' | 'XL';

type Product = {
  id: number,
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};

export {
  Sizes,
  Product
}

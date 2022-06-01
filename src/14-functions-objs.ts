(() => {
  type User = {
    email: string,
    password: string
  }
  const login = (data: User) => {
    console.log(`${data.email} | ${data.password}`);
  }

  // login('asd@gmail.com', '123');
  login({
    email: 'test@gmail.com',
    password: '123456',
    // test: 'hola'
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

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
})();

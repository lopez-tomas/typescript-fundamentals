(() => {
  let prices = [1,2,2,1,1,212, 'hello', true];
  // prices.push('asas');
  // prices.push(true);
  // prices.push({});
  prices.push(121212);
  prices = [1,2,2];

  let products = ['hello', true];
  //products.push(12);

  let mixed: (number | string | boolean | Object)[] = ['hello', true];
  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 2, 1, 1, 212];
  numbers.map(item => item * 2);
})();

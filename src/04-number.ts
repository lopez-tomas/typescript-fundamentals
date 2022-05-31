(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log(`productPrice: ${productPrice}`);

  let customerAge: number = 23;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1;
  console.log(`customerAge: ${customerAge}`);

  let productsInStock: number;
  console.log(`productsInStock: ${productsInStock}`);
  if (productsInStock > 10) {
    console.log("is greater");
  }

  let discount = parseInt("asdasd"); // NaN is number
  console.log(`discount: ${discount}`);
  if (discount <= 200) {
    console.log("applied");
  } else {
    console.log("denied");
  }

  let hex = 0xfff;
  console.log(`hex: ${hex}`);

  let bin = 0b1010;
  console.log(`bin: ${bin}`);

  // const myNumber: Number = 10; // not use Number type, use number instead
})();

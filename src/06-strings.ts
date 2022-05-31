(() => {
  let productTitle = "My amazing product";
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = "My amazing product CHANGED";
  console.log(`productTitle: ${productTitle}`);

  const productDescription = "I'm bla bla ba bla bl s asasas";
  console.log(`productDescription: ${productDescription}`);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);

  //const myString: String = ''; // not use String type, use string instead
})();

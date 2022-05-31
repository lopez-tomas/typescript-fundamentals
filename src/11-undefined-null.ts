(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  //myNull = 12;

  let myNumber: number | null = null
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'asd';

  function hi(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toUpperCase() || 'nobody';
    console.log(hello);
  }

  hi('Tomás');
  hi(null);

  hiV2('Tomás');
  hiV2(null);
})();

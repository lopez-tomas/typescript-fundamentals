(() => {
  let userId: (string | number);
  userId = 1212;
  userId = '1';

  function greeting(text: string | number) {
    if (typeof text === 'string') {
      console.log(`string ${text.toUpperCase()}`);
    } else {
      console.log(`number ${text.toFixed(1)}`)
    }
  }
  greeting('Tomás');
  greeting(1212.12121212121);
})();

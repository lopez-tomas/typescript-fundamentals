(() => {
  // Alias type
  type UserID = string | number; // our own type, an ALIAS TYPE

  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 's';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`
        string ${userId.toUpperCase()} |
        Size ${size}
      `);
    } else {
      console.log(`
        number ${userId.toFixed(2)} |
        Size ${size}
      `);
    }
  }
  greeting(1111, 'S');
  greeting('1111', 'XL');
})();

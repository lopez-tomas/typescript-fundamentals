(() => {
  let isEnabled = true;
  //isEnable = "ads"
  //isEnable = 1212
  isEnabled = false;

  let isNew: boolean = false;
  console.log(`isNew: ${isNew}`);
  isNew = true;
  console.log(`isNew: ${isNew}`);

  const random = Math.random()
  console.log(`random: ${random}`);
  isNew = random >= 0.5 ? true : false;
  console.log(`isNew: ${isNew}`);

  //const myBoolean: Boolean = true; // not use Boolean type, use boolean instead
})();

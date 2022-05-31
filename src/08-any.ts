(() => {
  let dynamicVar: any;
  dynamicVar = 100;
  dynamicVar = null;
  dynamicVar = {};
  dynamicVar = '';
  // :any type isn't recommended. It could be good to use it when we are migrating from JS to TS.

  dynamicVar = "Hello";
  let rta = (dynamicVar as string).toLowerCase(); // as is used to force an especific type (it's a cast)
  console.log(rta);

  dynamicVar = 1212;
  rta = (<number>dynamicVar).toFixed(); // we can use <TYPE> synax to cast too
  console.log(rta);
})();

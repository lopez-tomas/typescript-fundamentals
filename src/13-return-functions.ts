(() => {
  const calcTotal = (prices: number[]): string => {
    let total = prices.reduce((total, price) => total + price, 0);

    return total.toString(); // we can do this if we want to return an string
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`Total: ${rta}`);
    //return rta;
  }

  printTotal([1,2,1,1,1]);
})();

export default function Test() {
/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */

function priceCheck(products = ['eggs', 'milk', 'cheese'], productPrices = [2.89, 3.29, 5.79], productSold = ['eggs', 'eggs', 'cheese', 'milk'], soldPrice = [2.89, 2.99, 5.97, 3.29]) {
  const productAndPriceMap = new Map<string, number>();
  products.forEach((productName, index) => {
    productAndPriceMap.set(productName, productPrices[index]);
  });

  let productsSoldAtWrongPrice = 0;

  productSold.forEach((productSoldName, index) => {
    const productSoldPrice = soldPrice[index];
    if (productAndPriceMap.get(productSoldName) !== productSoldPrice) {
      productsSoldAtWrongPrice++;
    }
  });

  return productsSoldAtWrongPrice;

}

console.log(`Returned ${priceCheck()}, expected 2`);

  return null;
}
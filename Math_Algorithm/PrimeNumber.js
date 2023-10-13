function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(15));

module.exports = isPrime

//Big-O-notation-O(sqrt(n))-square root of n complexity
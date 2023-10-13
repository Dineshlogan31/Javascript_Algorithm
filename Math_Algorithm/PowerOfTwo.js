function isPowerOfTwo(n) {
  if (n < 1) {
    return false
  }
  while (n > 1) {
    if (n % 2 != 0) {
      return false
    }
    n = n / 2
  }
  return true
}
/*
using Bitwise Operator
if(n<1)
{
return false
}
return (n & (n-1)) === 0)

Big-O-notation-O(1)-Constant time complexity
*/

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

module.exports = isPowerOfTwo

//Big-O-notation-O(logn)-Logarithmic Time complexity
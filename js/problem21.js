function getProperDivisors (num){
  var divisors = [1];
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num%i==0) {
      divisors.push(i);
      if (num/i != i) {
        divisors.push(num/i);
      }
    }
  }
  return divisors;
}

function sumList(list){
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += parseInt(list[i]);
  }
  return sum;
}

function findAmicableNumbers (num){
  //d(n) defined as the sum of proper divisors of n (numbers less than n which divide evenly into n)
  //d(a) = b and d(b) = a, where a ≠ b
  var a;
  var b;
  var amicableNumbers = [];
  for (i = 2; i <= num; i++) {
    if (amicableNumbers.indexOf(i) == -1) {
      b = sumList(getProperDivisors(i));
      if (b <= num && b != i) {
        a = sumList(getProperDivisors(b));
        if (a == i) {
          amicableNumbers.push(a, b);
        }
      }
    }
  }
  return amicableNumbers;
}

var numbers = findAmicableNumbers(10000);
console.log(numbers);
console.log(sumList(numbers));

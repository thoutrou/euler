function isPrime (n) {
  var prime = true;
  if (n <= 0) {
    return false;
  }
  if (n % 2 == 0) {
    return false;
  }
  for(var number = 3; number <= Math.sqrt(n) && prime == true; number = number + 2){
    if (n % number == 0) {
      prime = false;
    }
  }
  return prime;
}

function checkPrimes (a, b) {
  var number_of_primes = 0;
  var i = 0;
  while(isPrime(i*i + a*i + b)){
    number_of_primes++;
    i++;
  }
  return number_of_primes;
}

var a_max, b_max;
var primes = 0;
var foo;
for(var b = -999; b < 1000; b++){
  for(var a = -999; a < 1000; a++){
    foo = checkPrimes(a,b);
    if (foo > primes) {
      primes = foo;
      a_max = a;
      b_max = b;
    }
  }
}

console.log(primes + " consecutive primes found for n^2 + " + a_max + "*n + " + b_max);
console.log("Solution: " + a_max*b_max);

function NthPrime(n){
  var primes = [2];
  var limit;
  var isPrime;
  for(var number = 3; primes.length < n; number=number+2){
    limit = Math.sqrt(number);
    isPrime = true;
    for (var j = 0; primes[j] <= limit; j++) {
      if(number % primes[j] == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      primes.push(number);
    }
  }
  return primes[n-1];
}

console.log(NthPrime(10001));

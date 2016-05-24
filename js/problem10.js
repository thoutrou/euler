function PrimeList(n){
  var primes = [2];
  var limit;
  var isPrime;
  for(var number = 3; number <= n; number+=2){
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
  return primes;
}

var sum = 0;
var primes = PrimeList(2000000);
for (var i = 0; i < primes.length; i++) {
  sum += primes[i];
}
console.log(sum);

function KgV (num){
  var primes = {};
  for(var i = 2; i <= num; i++){
    var i_primes = PrimeFactors(i);
    for(var prime in i_primes){
      if(primes.hasOwnProperty(prime)){
        if(primes[prime] < i_primes[prime]){
          primes[prime] = i_primes[prime];
        }
      }else{
        primes[prime] = i_primes[prime];
      }
    }
  }
  var vielfaches = 1;
  for(var prime in primes){
    vielfaches *= Math.pow(prime, primes[prime]);
  }
  return vielfaches;
}

function PrimeFactors (num){
  if(!isPrime(num)){
    for(var i = 2; i <= num/2; i++){
      if(isPrime(i)){
        if(num % i == 0){
          var primes = PrimeFactors(num/i);
          if(primes.hasOwnProperty(i)){
            primes[i] = primes[i] + 1;
          }else{
            primes[i] = 1;
          }
          return primes;
        }
      }
    }
  }else{
    var temp = {};
    temp[num] = 1;
    return temp;
  }
}

function isPrime(num){
  var foo = Math.floor(num/2);
  switch (num) {
    case 0: return false;
    case 1: return true;
    case 2: return true;
  }
  for(var i = 2; i < foo; i++){
    if(num % i == 0)
      return false;
  }
  return true;
}

console.log(KgV(20));

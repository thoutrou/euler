function Lpf(num){
  if(!isPrime(num)){
    for(var i = 2; i <= num/2; i++){
      if(isPrime(i)){
        if(num % i == 0){
          return Lpf(num/i);
        }
      }
    }
  }else{
    return num;
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

console.log("Problem3: " + Lpf(600851475143));

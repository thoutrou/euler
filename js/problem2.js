function FibonacciEvenSum(foo){
  var i = 1;
  var j = 2;
  var sum = 0;
  var bar;
  while(j < foo){
    if(j%2==0){
      sum += j;
    }
    bar = j;
    j += i;
    i = bar;
  }
  return sum;
}

console.log("Problem2: " + FibonacciEvenSum(4000000));

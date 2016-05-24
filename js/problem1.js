function Multi3n5(foo){
  var sum = 0;
  for(var i = 1; i < foo; i++){
    if(i%3==0 || i%5==0){
      sum += i;
    }
  }
  return sum
}

console.log("Problem1: " + Multi3n5(1000));

function SumSquare (num){
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i*i;
  }
  return sum;
}

function SquareSum(num){
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum * sum;
}

console.log(SquareSum(100)-SumSquare(100));

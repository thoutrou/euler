function divisors(num){
  var list = [];
  for(var i = 1; i <= Math.sqrt(num); i++){
    if(num % i == 0){
      list.push(i);
      if(num / i != i){
        list.push(num / i);
      }
    }
  }
  return list;
}

function triangNum(num){
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

var i = 0;
var temp = [];
while(temp.length <= 500){
  i++;
  temp = divisors(triangNum(i));
};

console.log(temp);
console.log(triangNum(i));

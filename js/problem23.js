var upper_limit = 28123;

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


//Find all Abundant Number below 28123
var abundant_numbers = [];
var sum_divisors = 0;
for(var i = 2; i <= upper_limit; i++){
  sum_divisors = sumList(getProperDivisors(i));
  if(sum_divisors > i){
    abundant_numbers.push(i);
  }
}
console.log("Number of abundant numbers: " + abundant_numbers.length);

//Get all Numbers that can be written as sum of two abundant numbers
var numbers = [];
var temp;
for (var i = 0; i < abundant_numbers.length; i++) {
  for (var j = i; j < abundant_numbers.length; j++) {
    temp = abundant_numbers[i]+abundant_numbers[j];
    if (temp <= upper_limit) {
      if(numbers.indexOf(temp) == -1){
        numbers.push(abundant_numbers[i]+abundant_numbers[j]);
      }
    }
  }
}
console.log("Numbers that can be written as sum of two abundant numbers: " + numbers.length);

//sum up all remaining numbers below 28123
 var sum = 0;
// for (var i = 1; i <= upper_limit; i++) {
//   if (numbers.indexOf(i) == -1) {
//     sum += i;
//   }
// }

console.log(sum);

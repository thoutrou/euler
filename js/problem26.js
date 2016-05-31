//Not enough digits
function findCycle (num){
  var cycle = "";
  var num_string = num.toString().split(".")[1];
  if (num_string.length < 16) {
    return cycle;
  }
  //-2 just to make in case the last digit is rounded
  var test_string;
  for(var i = num_string.length - 2; i >= 0; i--){
    cycle = num_string[i] + cycle;
    if(i - cycle.length > 0){
      test_string = num_string.substr(i-cycle.length, cycle.length);
      if(test_string == cycle){
        if(i - cycle.length * 2 > 0){
          test_string = num_string.substr(i-cycle.length*2, cycle.length);
          if(test_string == cycle){
            return cycle;
          }
        }else{
          return cycle;
        }
      }
    }
  }
  return cycle;
}

var longest_cycle = "";
var digit;
var foo;
for (var i = 2; i < 1000; i++) {
  // console.log((1/i).toString().split(".")[1]);
  foo = findCycle(1/i);
  if(foo.length > longest_cycle.length){
    longest_cycle = foo;
    digit = i;
  }
}

console.log(longest_cycle);
console.log(digit);

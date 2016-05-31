//Solution Approach from http://www.mathblog.dk/project-euler-26-find-the-value-of-d-1000-for-which-1d-contains-the-longest-recurring-cycle/
function cycleLength (d) {
  var numbers = {};
  var number = 1;
  while (!(numbers.hasOwnProperty(number))) {
    numbers[number] = true;
    number = (number * 10) % d;
  }

  var length = 0;
  for (var key in numbers) {
    if (numbers.hasOwnProperty(key)) {
      length++;
    }
  }
  return length;
}

var number;
var max_length = 0;
var cycle_length;
for (var i = 999; i > 1; i--) {
  cycle_length = cycleLength(i);
  if(cycle_length > max_length){
    max_length = cycle_length;
    number = i;
    if(max_length == number - 1){
      break;
    }
  }
}

console.log("Length: " + max_length);
console.log("Number: " + number);

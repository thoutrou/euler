function LongestCollatzSequence (limit) {
  var sequence = [1];
  var number;
  var tempSequence = [];
  for(var i = 1; i <= limit; i++){
    number = i;
    //console.log(i);   //Turn on to see current status (!!will take longer!!)
    tempSequence = [];
    //build tempSequence for number i
    while(number > 1){
      tempSequence.push(number);
      for (var j = 0; j < sequence.length; j++) {
        if(sequence[j] == number){
          if(j < sequence.length - 1){
            //tempSequence.push(sequence.slice(j+1));
            tempSequence = tempSequence.concat(sequence.slice(j+1));
            number = 2;  //Cause of the next if or else endlessloop
          }
        }
      }
      if(number % 2 == 0){
        number /= 2;
      }else {
        number = number * 3 + 1;
      }
    }
    if (sequence.length < tempSequence.length) {
      sequence = tempSequence;
    }
  }
  console.log(sequence.length);
  return sequence;
}

var foo = LongestCollatzSequence(1000000);
console.log(foo);
console.log("Startingnumber: " + foo[0]);
console.log("Sequencelength: " + foo.length);

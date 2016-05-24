function LongestCollatzSequence (limit) {
  var foo = 0;
  var bar;
  for (var i = 1; i <= limit; i++) {
    var j = 1;
    var num = i;
    while(num != 1){
      num = (num % 2 == 0) ? num / 2 : 3 * num + 1;
      j++;
    }
    if (foo < j) {
      foo = j;
      bar = i;
    }
  }
  console.log(bar + " " + foo);
}

LongestCollatzSequence(1000000);

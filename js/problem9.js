function SpecialPythTrip (num){
  var a, b, c;
  var found = false;
  for(a = 1; a < num; a++){
    for(b = a + 1; b < num; b++){
      c = num - a - b;
      if(a*a + b*b == c*c){
        found = true;
        break;
      }
    }
    if(found){
      var temp = {};
      temp['a'] = a;
      temp['b'] = b;
      temp['c'] = c;
      return temp;
    }
  }
  return -1;
}

var temp = SpecialPythTrip(1000);
console.log(temp);
console.log(temp.a * temp.b *temp.c);

function Lpp (digits){
  var num = Math.pow(10, digits) - 1;
  var max = num * num;
  var min = Math.pow(10, digits - 1);
  for(var i = max; i > 0; i--){
    if(isPalindrom(i)){
      for(var j = num; j >= min; j--){
        if(i % j == 0){
          if(i / j > min && i / j < num)
            return i;
        }
      }
    }
  }
}

function isPalindrom (foo){
  var bar = foo.toString();
  for(var i = 0; i <= bar.length / 2; i++){;
    if(bar[i] != bar[bar.length - i - 1]){
      return false;
    }
  }
  return true;
}
console.log("Problem4: " + Lpp(3));

function Num2Words (num){
  var result = "";
  var digit;
  if(num > 9999){
    return 'Number > 9999 not supportet!';
  }
  if(num >= 1000){
    digit = Math.floor(num/1000);
    num = num%1000;
    result += digit2Word(digit);
    result += " thousand ";
  }
  if (num >= 100 && num < 1000) {
    digit = Math.floor(num/100);
    num = num%100;
    result += digit2Word(digit);
    result += ' hundred '
    if (num > 0) {
      result += 'and ';
    }
  }
  if (num >= 20 && num < 100) {
    digit = Math.floor(num/10);
    num = num%10;
    switch (digit) {
      case 9:
        result += 'ninety';
        break;
      case 8:
        result += 'eighty';
        break;
      case 7:
        result += 'seventy';
        break;
      case 6:
        result += 'sixty';
        break;
      case 5:
        result += 'fifty';
        break;
      case 4:
        result += 'forty';
        break;
      case 3:
        result += 'thirty';
        break;
      case 2:
        result += 'twenty';
        break;
    }
    if(num > 0 && num < 10){
      result += '-';
      result += digit2Word(num);
      num = 0;
    }
  }
  if (num >= 10 && num < 20) {
    switch (num) {
      case 19:
        result += 'nineteen';
        break;
      case 18:
        result += 'eighteen';
        break;
      case 17:
        result += 'seventeen';
        break;
      case 16:
        result += 'sixteen';
        break;
      case 15:
        result += 'fifteen';
        break;
      case 14:
        result += 'fourteen';
        break;
      case 13:
        result += 'thirteen';
        break;
      case 12:
        result += 'twelve';
        break;
      case 11:
        result += 'eleven';
        break;
      case 10:
        result += 'ten';
        break;
    }
  }
  if (num >= 1 && num < 10) {
    result += digit2Word(num);
  }
  return result;
}

function digit2Word (digit){
  switch (digit) {
    case 9:
      return 'nine'
      break;
    case 8:
      return 'eight'
      break;
    case 7:
      return 'seven'
      break;
    case 6:
      return 'six'
      break;
    case 5:
      return 'five'
      break;
    case 4:
      return 'four'
      break;
    case 3:
      return 'three'
      break;
    case 2:
      return 'two'
      break;
    case 1:
      return 'one'
      break;
    case 0:
      return 'zero'
      break;
  }
}

var string = "";
for(var i = 1; i <= 1000; i++){
  string += Num2Words(i);
}

string = string.replace(/-/g, "");
string = string.replace(/ /g, "");
console.log(string.length);

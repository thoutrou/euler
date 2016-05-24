//Not working
function DotW (date){
  date = date.split(".");
  var tag = parseInt(date[0]);
  var monat = parseInt(date[1]);
  var jahr = parseInt(date[2]);

  var n_t; //Tagesziffer
  var n_m; //Monatsziffer
  var n_jh; //Jahrhundertsziffer
  var n_jz; //Jahresziffer
  var n_sj; //Schaltjahreskorrektur

  //Tagesziffer
  n_t = tag % 7;

  //Monatsziffer
  switch (monat) {
    case 1:
      n_m = 0;
      break;
    case 2:
      n_m = 3;
      break;
    case 3:
      n_m = 3;
      break;
    case 4:
      n_m = 6;
      break;
    case 5:
      n_m = 1;
      break;
    case 6:
      n_m = 4;
      break;
    case 7:
      n_m = 6;
      break;
    case 8:
      n_m = 2;
      break;
    case 9:
      n_m = 5;
      break;
    case 10:
      n_m = 0;
      break;
    case 11:
      n_m = 3;
      break;
    case 12:
      n_m = 5;
      break;
  }

  //Jahresziffer
  var j_z = Math.floor((jahr/100 - Math.floor(jahr/100)) * 100);
  n_jz = (j_z + (Math.floor(j_z / 4))) % 7;

  //Jahrhundertsziffer
  var j_h = Math.floor(jahr/100);
  n_jh = (3 - (j_h % 4)) * 2;

  //Schaltjahreskorrektur
  n_sj = (istSchaltjahr(jahr)) ? 6 : 0;

//Wochentag
var w = (n_t + n_m + n_jh + n_jz + n_sj) % 7;

return w;
}

function istSchaltjahr (jahr){
  if(jahr % 400 == 0){
    return true;
  }else if (jahr % 100 == 0) {
    return false;
  }else if (jahr % 4 == 0) {
    return true;
  }else {
    return false;
  }
}

function countDays (startyear, endyear, dayOfMonth, day){
  var count = 0;
  for(var year = startyear; year <= endyear; year++){
    for(var month = 1; month <= 12; month++){
      var date = dayOfMonth.toString() + "." + month.toString() + "." + year.toString();
      if(DotW(date) == day){
        // console.log(date);
        count++;
      }
    }
  }
  return count;
}

console.log(countDays(1901,2000,1,0));

var length;
sum = 1;
for (var i = 3; i <= 1001; i += 2) {
  length = i;
  area = length * length;
  sum += area;  //up rigth
  sum += area - length + 1; //up left
  sum += area - 2 * length + 2; //down left
  sum += area - 3 * length + 3; //down right
}

console.log(sum);

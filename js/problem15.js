function LatticePaths (x, y) {
  x;
  y = (typeof y === 'undefined') ? x : y;
  var lattice = [];
  for (var i = 0; i <= x; i++) {
    lattice[i] = [];
  }
  for (var i = 0; i <= x; i++) {
    for (var j = 0; j <= y; j++) {
      if(i == 0 || j == 0){
        lattice[i][j] = 1;
      }else {
        lattice[i][j] = lattice[i-1][j] + lattice[i][j-1];
      }
    }
  }
  console.log(lattice);
  return lattice[x][y];
}

console.log(LatticePaths(20, 20));

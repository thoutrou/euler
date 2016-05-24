function CollatzSequence (limit) {
  var tree = {};
  var queue = [];
  var next;
  var number;
  for(var i = 1; i <= limit; i++){
    if(!tree.hasOwnProperty(i)){
      if(i == 1){
        tree[1] = {};
        tree[1]['next'] = false;
        tree[1]['chain'] = 1;
      }else {
        next = (i % 2 ==0) ? i / 2 : 3 * i + 1;
        //queue aufbauen bis eine zahl im tree gefunden wird
        while(!tree.hasOwnProperty(next)){
          queue.push(next);
          next = (next % 2 == 0) ? next / 2 : 3 * next + 1;
        }
        //queue abbauen (lilo)
        while (queue.length > 0) {
          number = queue.pop();
          tree[number] = {};
          tree[number]['next'] = next;
          tree[number]['chain'] = parseInt(tree[next]['chain']) + 1;
          next = number;
        }
        //i einfügen (start der momentanen chain)
        tree[i] = {};
        tree[i]['next'] = next;
        tree[i]['chain'] = parseInt(tree[next]['chain']) + 1;
      }
    }
  }
  return tree;
}

var foo = 1000000;
var sequenceTree = CollatzSequence(foo);
var highestChain = 0;
var start = 0;
for (var i = 1; i <= foo; i++) {
  if(sequenceTree[i]['chain'] > highestChain){
    highestChain = sequenceTree[i]['chain'];
    start = i;
  }
}
console.log("Start: " + start);
console.log("Highestchain: " + highestChain);

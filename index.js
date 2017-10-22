var getFirstSelector = function(selector) {
  var result = document.querySelector(selector);
  return result;
}

var nestedTarget = function() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

let increaseRankBy = function(n) {
  let lists = document.querySelectorAll('.ranked-list');
  for(let i=0;i<lists.length;i++) {
    let ranks = lists[i].querySelectorAll('li');
    for(let j=0;j<ranks.length;j++) {
      let oldRank = parseInt(ranks[j].innerHTML)
      ranks[j].innerHTML = oldRank +n;
    }
  }
}

let deepestChild = function() {
  let grandNode = document.querySelector('#grand-node');
  let child = grandNode.children[0];
  while(child.children != 0) {
    child = child.children[0];
  }
  return child.innerHTML;
}

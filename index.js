var getFirstSelector = function(selector) {
  var result = document.querySelector(selector);
  return result;
}

var nestedTarget = function() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

let increaseRankBy = function(n) {
  let lists = document.querySelectorAll('.ranked-lists');
  for(let i=0;i<lists.length;i++) {
    let ranks = list[i].querySelectorAll('li');
    for(let j=0;j<ranks.length;j++) {
      newRank = parseInt(ranks[i].innerHTML) +n;
      ranks[i].innerHTML = newRank;
    }
  }
}

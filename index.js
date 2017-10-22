var getFirstSelector = function(selector) {
  var result = document.querySelector(selector);
  return result;
}

var nestedTarget = function() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

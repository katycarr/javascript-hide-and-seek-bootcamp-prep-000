var getFirstSelector = function(selector) {
  var result = document.querySelector(selector);
  return result;
}

var nestedTarget() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}
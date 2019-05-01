"use strict";

var page = document.getElementById('buttonDiv');

if (page) {
  var kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

  var _loop = function _loop() {
    var item = _kButtonColors[_i];
    var button = document.createElement('button');
    button.style.backgroundColor = item;
    button.addEventListener('click', function () {
      chrome.storage.sync.set({
        color: item
      }, function () {
        console.log("color is ".concat(item));
      });
    });
    page.appendChild(button);
  };

  for (var _i = 0, _kButtonColors = kButtonColors; _i < _kButtonColors.length; _i++) {
    _loop();
  }
}
"use strict";

var changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function (data) {
  if (changeColor) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  }
});

if (changeColor) {
  changeColor.onclick = function (element) {
    if (element.target) {
      var color = element.target.value;
      chrome.tabs.query({
        active: true,
        currentWindow: true
      }, function (tabs) {
        if (tabs[0].id) {
          chrome.tabs.executeScript(tabs[0].id, {
            code: "document.body.style.backgroundColor = \"".concat(color, "\";")
          });
        }
      });
    }
  };
}
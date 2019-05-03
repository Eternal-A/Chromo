const s = document.createElement('script');
s.src = chrome.extension.getURL('inject.js');
document.body.appendChild(s);

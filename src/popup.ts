const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', (data) => {
    if (changeColor) {
        changeColor.style.backgroundColor = data.color;
        changeColor.setAttribute('value', data.color);
    }
});

if (changeColor) {
    changeColor.onclick = (element) => {
        if (element.target) {
            const color = (element.target as HTMLButtonElement).value;
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                if (tabs[0].id) {
                    chrome.tabs.executeScript(
                        tabs[0].id,
                        {code: `document.body.style.backgroundColor = "${color}";`},
                    );
                }
            });
        }
    }
}

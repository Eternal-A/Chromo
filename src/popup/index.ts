const eDelete = document.getElementById('delete') as HTMLDivElement;

eDelete.addEventListener('click', () => {
    chrome.tabs.query({
        currentWindow: true,
        active: true,
    }, (tab) => {
        if (tab[0].id) {
            chrome.tabs.executeScript(tab[0].id, {
                file: 'inject.js',
            });
        }
    });
});

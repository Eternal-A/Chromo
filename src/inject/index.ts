(window as any).removeByClass = (pattern: string) => {
    const list = document.getElementsByClassName(pattern);
    if (list.length > 1) {
        console.log('class name matches more than one class!');
        return;
    }
    if (list.length === 0) {
        console.log('class name matches zero class!');
        return;
    }
    list[0].remove();
}

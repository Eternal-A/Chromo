export function resovleURL(url: string): { host: string, path: string } {
    const temp = url.replace(/^https?:\/\//, '');
    const host = temp.replace(/\/.*$/, '');
    const path = temp.replace(/^[^\/]*/, '');
    return { host, path };
}

export function match(to: string, pattern: string | RegExp): boolean {
    if (typeof pattern === 'string') {
        return to === pattern;
    }
    return to.match(pattern) !== null;
}

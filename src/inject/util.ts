export function resovleURL(url: string): { host: string, path: string } {
    const temp = url.replace(/^https?:\/\//, '');
    const host = temp.replace(/\/.*$/, '');
    const path = temp.replace(/^[^\/]*/, '');
    return { host, path };
}
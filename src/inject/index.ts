import { IHandler } from './type';
import { URL } from './decorator';
import { resovleURL } from './util';

export const HandlerList: {
    host: RegExp | string,
    path: RegExp | string,
    handler: IHandler,
}[] = [];

@URL(/j/)
class Test implements IHandler {
    init() {
        console.log('Hello Chrome');
    }
}

function start() {
    const { host, path } = resovleURL(document.URL);
    for (let i = 0; i < HandlerList.length; i++) {
        const handler = HandlerList[i];
        let hostMatch = false;
        let pathMatch = false;
        if (typeof handler.host === "string") {
            hostMatch = host == handler.host;
        } else {
            hostMatch = host.match(handler.host) !== null;
        }
        if (typeof handler.path === "string") {
            pathMatch = path == handler.path;
        } else {
            pathMatch = path.match(handler.path) !== null;
        }
        if (hostMatch && pathMatch) {
            handler.handler.init();
        }
    }
}

start();

import { IHandler } from './type';
import { URL } from './decorator';

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
    const url = document.URL;
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*/, '');
    const path = url.replace(/^https?:\/\//, '').replace(/^[^\/]*/, '');
    console.log(host, path);
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

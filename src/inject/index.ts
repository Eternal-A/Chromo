import { HandlerList } from './decorator';
import { resovleURL, match } from './util';
import './domain';

function start() {
    const { host, path } = resovleURL(document.URL);
    for (let i = 0; i < HandlerList.length; i++) {
        const handler = HandlerList[i];
        if (match(host, handler.host) && match(path, handler.path)) {
            console.log('Chromo Inject!');
            handler.handler.init();
        }
    }
}

start();

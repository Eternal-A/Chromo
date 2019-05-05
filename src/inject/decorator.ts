import { HandlerConstructor, IHandler } from './type';
import { HandlerList } from './index';

export function URL(host: RegExp | string = /.*/, path: RegExp | string = /.*/) {
    return function<T extends HandlerConstructor>(target: T) {
        HandlerList.push({
            host,
            path,
            handler: new target(),
        });
        return target;
    }
}

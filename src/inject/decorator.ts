import { HandlerConstructor, IHandler } from './type';

export const HandlerList: {
    host: RegExp | string,
    path: RegExp | string,
    handler: IHandler,
}[] = [];

export function Inject(host: RegExp | string = /.*/, path: RegExp | string = /.*/) {
    return function<T extends HandlerConstructor>(target: T) {
        HandlerList.push({
            host,
            path,
            handler: new target(),
        });
        return target;
    }
}

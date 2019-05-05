interface IHandler {
    init(): void;
}

type HandlerConstructor = {
    new (...args: any[]): IHandler;
}

const handlers: {
    [key: string]: IHandler;
} = {};

function Path(pattern: string) {
    function decorator<T extends HandlerConstructor>(target: T) {
        handlers[pattern] = new target;
        return target;
    }
    return decorator;
}

@Path('^https://j.*')
class A implements IHandler {
    init() {
        console.log('j matches!');
    }
}

@Path('^https://w.*')
class B implements IHandler {
    init() {
        console.log('w matches!');
    }
}

const url = document.URL;

for(const key in handlers) {
    const reg = new RegExp(key);
    if (url.match(reg)) {
        handlers[key].init();
    }
}

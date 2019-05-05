export interface IHandler {
    init(): void;
}

export type HandlerConstructor = {
    new (...args: any[]): IHandler;
}

export type Pattern = {
    host: string;
    path: string;
}

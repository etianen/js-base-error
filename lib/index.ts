interface ExtendedErrorConstructor extends ErrorConstructor {
    captureStackTrace: (ex: Error, constructor: Function) => void;
}

interface ExtendedError extends Error {
    stack: string;
}

export default class BaseError extends Error {

    public stack: string;

    constructor(public message?: string) {
        super();
        // Add the stack, if supported by the runtime.
        if ((Error as ExtendedErrorConstructor).captureStackTrace) {
            (Error as ExtendedErrorConstructor).captureStackTrace(this, this.constructor);
        } else {
            this.stack = ((new Error()) as ExtendedError).stack;
        }
    }

    public toString(): string {
        return this.message;
    }

}

"use strict";

function BaseError(message) {
    this.message = message || "";
    if(this.constructor.name) {
        this.name = this.constructor.name;
    }
    if (Error.captureStackTrace) {
        // V8 stack trace capture.
        Error.captureStackTrace(this, this.constructor);
    } else {
        // Fallback stack trace capture.
        this.stack = Error().stack;
    }
}

BaseError.prototype = Object.create(Error.prototype);
BaseError.prototype.constructor = BaseError;

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseError = BaseError;
exports["default"] = BaseError;

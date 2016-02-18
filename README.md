# @etianen/base-error

A base error class with stack trace support.


## Installing

``` bash
npm install '@etianen/base-error'
```


## Overview

Creating custom error types in Javascript is needlessly difficult.

@etianen/base-error provides a subclassable `BaseError` that can be used in ES6 and Typescript projects.

``` js
import BaseError from "@etianen/base-error";

class MyCustomError extends BaseError {}
```


## BaseError API.

### new BaseError()

Creates a new `BaseError`.

``` ts
new BaseError(message?: string): void;
```


### BaseError.message

The message used to initialize the error.

``` ts
BaseError.message: string;
```


### BaseError.stack

The stack trace of the error.

``` ts
BaseError.stack: string;
```


### BaseError.toString()

A string representation of the error.

``` ts
BaseError.toString(): string;
```


## Build status

This project is built on every push using the Travis-CI service.

[![Build Status](https://travis-ci.org/etianen/js-base-error.svg?branch=master)](https://travis-ci.org/etianen/js-base-error)


## Support and announcements

Downloads and bug tracking can be found at the [main project website](http://github.com/etianen/js-base-error).


## More information

This project was developed by Dave Hall. You can get the code
from the [project site](http://github.com/etianen/js-base-error).

Dave Hall is a freelance web developer, based in Cambridge, UK. You can usually
find him on the Internet:

- [Website](http://www.etianen.com/)
- [Google Profile](http://www.google.com/profiles/david.etianen)

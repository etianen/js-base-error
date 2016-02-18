import {expect} from "chai";
import BaseError from "../lib/index";


describe("errors", () => {

    class TestError extends BaseError {};

    const testError = new TestError("foo");

    describe("BaseError", () => {

        it("allows subclassing", () => {
            expect(testError).to.be.an.instanceOf(TestError);
            expect(testError).to.be.an.instanceOf(BaseError);
            expect(testError).to.be.an.instanceOf(Error);
        });

        it("provides a stack trace", () => {
            expect(testError.stack).to.be.a("string");
        });

        it("provides a message", () => {
            expect(testError.message).to.equal("foo");
        });

        it("provides a toString() implementation", () => {
            expect(testError.toString()).to.equal("foo");
        });

    });

});

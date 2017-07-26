const expect = require("chai").expect;
const BaseError = require("../lib/index")["default"];


describe("BaseError", () => {

    class TestError extends BaseError {}

    const testError = new TestError("foo");

    it("allows subclassing", () => {
        expect(testError).to.be.an.instanceOf(TestError);
        expect(testError).to.be.an.instanceOf(BaseError);
        expect(testError).to.be.an.instanceOf(Error);
        expect(Error()).to.not.be.an.instanceOf(TestError);
    });

    it("provides a stack trace", () => {
        expect(testError.stack).to.be.a("string");
    });

    it("provides a message", () => {
        expect(testError.message).to.equal("foo");
    });

    it("provides a toString() implementation (with constructor name as error name)", () => {
        expect(testError.toString()).to.equal(`${TestError.name}: foo`);
    });

    it("provides a toString() implementation (with overridden error name)", () => {
        const ERROR_NAME = 'SpecialError';
        class TestErrorWithOverriddenErrorName extends BaseError {
            constructor(message) {
                super(message);
                this.name = ERROR_NAME;
            }
        }
        const specialError = new TestErrorWithOverriddenErrorName('foo');

        expect(specialError.toString()).to.equal(`${ERROR_NAME}: foo`);
    });

});

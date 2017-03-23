const expect = chai.expect;

describe('myFn', () => {
    it('should return 4', () => {
        expect(window.myFn).to.be.a('function');
        expect(window.myFn()).to.be.equal(4);
        expect(window.AudioContext).to.be.ok;
    });
});
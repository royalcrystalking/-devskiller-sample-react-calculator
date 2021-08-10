import Calculation from "../../src/logic/calculation";

describe('verify_pack.Calculation [Verify]', function () {
    describe('validation', function () {
        it('should not be equal to 4259.0908 and should\'nt return', function () {
            let calculation = new Calculation('41342.54-543.7896');

            expect(calculation.calculate()).to.not.equal(4259.0908);
            calculation.calculate().should.to.not.false;
        });

        it('should return 8.51', function () {
            let calculation = new Calculation('3.01+5.50');

            expect(calculation.calculate()).to.equal(8.51);
        });

        it('should return 139991', function () {
            let calculation = new Calculation('140000.5-9.5');

            expect(calculation.calculate()).to.equal(139991);
        });

        it('should return 1670.25', function () {
            let calculation = new Calculation('127.5*13.1');

            expect(calculation.calculate()).to.equal(1670.25);
        });

        it('should return 1157.1', function () {
            let calculation = new Calculation('2314.2/2');

            expect(calculation.calculate()).to.equal(1157.1);
        });
        it('should return false for wrong input', function () {
            let calculation = new Calculation('string');

            expect(calculation.calculate()).to.false;
        });

        it('should return false for wrong input', function () {
            let calculation = new Calculation('432432*423*');
            expect(calculation.calculate()).to.false;
        });

        it('should return false for wrong input', function () {
            let calculation = new Calculation('49463*');

            expect(calculation.calculate()).to.false;
        });
    });

    describe('types', function () {
       it ('should be a number', function () {
           let calculation = new Calculation('86783*26749');

           expect(calculation.calculate()).to.be.a('number');
       });
    })
});

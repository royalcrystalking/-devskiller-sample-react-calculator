import Calculation from "../src/logic/calculation";

describe('Calculation', function() {
    describe('operations', function() {
        it('should not be equal to 4359.0908 and should\'nt return', function () {
           let calculation = new Calculation('42342.54-543.7896');

           expect(calculation.calculate()).to.not.equal(4359.0908);
           calculation.calculate().should.to.not.false;
        });

        it('should return 10.51', function() {
            let calculation = new Calculation('4.01+6.50');

            expect(calculation.calculate()).to.equal(10.51);
        });

        it('should return 149991', function () {
            let calculation = new Calculation('150000.5-9.5');

            expect(calculation.calculate()).to.equal(149991);
        });

        it('should return 3407.25', function () {
           let calculation = new Calculation('147.5*23.1');

           expect(calculation.calculate()).to.equal(3407.25);
        });

        it('should return 2157.1', function () {
           let calculation = new Calculation('4314.2/2');

           expect(calculation.calculate()).to.equal(2157.1);
        });
    });
});

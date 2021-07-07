import { expect } from 'chai';
import { Calculator } from "../index"

describe('Test', () => {

    it('Tranform Lowercase To UpperCase', () => {
        const calculator = new Calculator()
        const result = calculator.sum("hola")
        expect(result).to.equal("HOLA");
    });

    it('Invalid parameter', () => {
        const calculator = new Calculator()
        const result = calculator.sum("Hol@")
        expect(result).to.equal("");
    });


});
import { compute } from './compute';

describe('compute', () => {
    it('Should render 0 if inputs is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('Should increment the input if it is positive', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})
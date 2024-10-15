import { MediaComponent } from "./media.component";

describe('MediaComponent', () => {
    let component: MediaComponent;

    beforeEach(() => {
        component = new MediaComponent();
    });

    describe('calculateMean', () => {
        it('should return the correct mean for column 1', () => {
            const col1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
            const meanCol1 = component.getMean(col1); 
            expect(meanCol1).toBeCloseTo(550.6, 1);
        });

        it('should return the correct mean for column 2', () => {
            const col2 = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
            const meanCol2 = component.getMean(col2); 
            expect(meanCol2).toBeCloseTo(60.32, 2);
        });
    });
});
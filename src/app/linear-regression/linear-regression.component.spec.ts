import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { By } from '@angular/platform-browser';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearRegressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return b0 approximately -22.55 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB0'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB1'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(1.7279, 2);
  });
  
  it('Should return yk approximately 644.429 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    component.inputX = 386; 
    fixture.detectChanges();
    
    // Act
    const button = fixture.debugElement.query(By.css('#calculateYK'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(644.429, 2);
  });
  
  it('Should return b0 approximately -4.604 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB0'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(-4.039, 2);
  });

  it('Should return b1 approximately 0.16064 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB1'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(0.1681, 2);
  });
  
  it('Should return yk approximately 60.858 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] if x=386', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    component.inputX = 386; 
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateYK'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(60.858, 2);
  });
  
  it('Should return b0 approximately -23.92 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB0'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(-23.92, 2);
  });
  
  it('Should return b1 approximately 1.43097 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB1'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    component.inputX = 386;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateYK'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(528.4294, 2);
  });
  
  it('Should return b0 approximately -4.604 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB0'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(-4.604, 2);
  });
  
  it('Should return b1 approximately 0.140164 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateB1'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(0.140164, 2);
  });
  
  it('Should return yk approximately 60.858 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] if x=386', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    component.inputX = 386; 
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateYK'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(parseFloat(resultText)).toBeCloseTo(49.4994, 2);
  });  

  it('Shpuld return the string 130, 650, 99, 150, 128, 302, 95, 945, 368, 961 in to array', () => {
    const result = component.getArray('130, 650, 99, 150, 128, 302, 95, 945, 368, 961');
    expect(result).toEqual([130, 650, 99, 150, 128, 302, 95, 945, 368, 961]);
  });

  it('Should return the string 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 in to array', () => {
    const result = component.getArray('186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601');
    expect(result).toEqual([186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
  });

  it('Should return de string 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2 in to array', () => {
    const result = component.getArray('15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2');
    expect(result).toEqual([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
  })

  it('Should return b0 approximately -22.55 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getB0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getB1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386', () => {
    const result = component.getYK([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.604 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getB0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(-4.039, 2);
  });

  it('Should return b1 approximately 0.16064 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getB1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.1681, 2);
  });

  it('Should return yk approximately 60.858 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2] if x=386', () => {
    const result = component.getYK([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
    expect(result).toBeCloseTo(60.858, 2);
  });

  it('Should return b0 approximately -23.92 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getB0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('Should return b1 approximately 1.43097 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getB1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386', () => {
    const result = component.getYK([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
    expect(result).toBeCloseTo(528.4294, 2);
  });

  it('Should return b0 approximately -4.604 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getB0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(-4.604, 2);
  });

  it('Should return b1 approximately 0.140164 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getB1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.140164, 2);
  });

  it('Should return yk approximately 60.858 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601] if x=386', () => {
    const result = component.getYK([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
    expect(result).toBeCloseTo(49.4994, 2);
  });
});

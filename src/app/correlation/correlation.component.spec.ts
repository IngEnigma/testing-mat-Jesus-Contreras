import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';
import { By } from '@angular/platform-browser';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return r=0.9545 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRXY'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9545, 2);
  });

  it('Should return r²=0.9111 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRR'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9111, 2);
  });

  it('Should return r=0.9333 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRXY'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9333, 2);
  });

  it('Should return r²=0.8711 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async() => {
    // Arrange
    component.imputString1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
    component.imputString2 = '15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRR'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.8711, 2);
  });

  it('Should return r=0.9631 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async() => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRXY'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9631, 2);
  });

  it('Should return r²=0.9276 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRR'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9276, 2);
  });

  it('Should return r=0.9480 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRXY'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.9480, 2);
  });

  it('Should return r²=0.8988 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    // Arrange
    component.imputString1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
    component.imputString2 = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateRR'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.8988, 2);
  });

  it('Shpuld return the string 130, 650, 99, 150, 128, 302, 95, 945, 368, 961 in to array', () => {
    const result = component.getArray('130, 650, 99, 150, 128, 302, 95, 945, 368, 961');
    expect(result).toEqual([130, 650, 99, 150, 128, 302, 95, 945, 368, 961]);
  });

  it('Should return the string 186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601 in to array', () => {
    const result = component.getArray('186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601');
    expect(result).toEqual([186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
  });

  it('Should return de string 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130 in to array', () => {
    const result = component.getArray('163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130');
    expect(result).toEqual([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130]);
  });

  it('Should return de string 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2 in to array', () => {
    const result = component.getArray('15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2');
    expect(result).toEqual([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
  });

  it('Should return r=0.9545 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getRXY([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9545, 2);
  });

  it('Should return r²=0.9111 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getRR([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9111, 2);
  });

  it('Should return r=0.9333 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getRXY([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.9333, 2);
  });

  it('Should return r²=0.8711 with the dataset [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getRR([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.8711, 2);
  });

  it('Should return r=0.9631 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getRXY([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9631, 2);
  });

  it('Should return r²=0.9276 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', () => {
    const result = component.getRR([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9276, 2);  
  });

  it('Should return r=0.9480 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getRXY([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.9480, 2);
  });

  it('Should return r²=0.8988 with the dataset [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getRR([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.8988, 2);
  });

});
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TstudentComponent } from './tstudent.component';

describe('TstudentComponent', () => {
  let component: TstudentComponent;
  let fixture: ComponentFixture<TstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TstudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct t-distribution probability for x=1.1 and dof=8 and should return p=0.35006', async () => {
    // Arrange
    component.dof = 9;
    component.limiteInferior = 0;
    component.limiteSuperior = 1.1;
    component.numSegmentos = 10;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateTStudent'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.35006, 5);
  });

  it('should return the correct t-distribution probability for x=1.1812 and dof=9 and should return p=0.36757', async () => {
    // Arrange
    component.dof = 10;
    component.limiteInferior = 0;
    component.limiteSuperior = 1.1812;
    component.numSegmentos = 20;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateTStudent'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.36757, 5);
  });

  it('should return the correct t-distribution probability for x=2.75 and dof=30 and should return p=0.49500', async () => {
    // Arrange
    component.dof = 30;
    component.limiteInferior = 0;
    component.limiteSuperior = 2.75;
    component.numSegmentos = 10;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateTStudent'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.495, 5);
  });

  it('should return the correct t-distribution probability for x=1.1 and dof=9 and should return p=0.35006', () => {
    const result = component.getT(9, 0, 1.1, 10);
    expect(result).toBeCloseTo(0.35006, 5);
  });

  it('should return the correct t-distribution probability for x=1.1812 and dof=10 and should return p=0.36757', () => {
    const result = component.getT(10, 0, 1.1812, 20);
    expect(result).toBeCloseTo(0.36757, 5);
  });

  it('should return the correct t-distribution probability for x=2.750 and dof=30 and should return p=0.49500', () => {
    const result = component.getT(30, 0, 2.75, 10);
    expect(result).toBeCloseTo(0.495, 5);
  });
});

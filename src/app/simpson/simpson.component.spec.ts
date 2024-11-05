import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Simpson } from '../classes/simpson';
import { SimpsonComponent } from './simpson.component';
import { By } from '@angular/platform-browser';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;
  let simp: SimpsonComponent;

  beforeEach(async () => {
    simp = new SimpsonComponent();
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return 16 if f(x)=2x, x0=1 x1=4', async()=>{
    // Arrange
    component.fx = '2x';
    component.x0 = 0;
    component.x1 = 4;
    component.seg = 4;
    component.error = 0.00001;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateSimp'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(16.0,1);
  });

  it('Should return 0.333 if f(x)=x^2, x0=0 x1=1', async()=>{
    // Arrange
    component.fx = 'x^2';
    component.x0 = 0;
    component.x1 = 1;
    component.seg = 4;
    component.error = 0.0001;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateSimp'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(0.333,2);
  });

  it('Should return 1.38 in f(x)=1/x, x0=1, x1=4', async()=>{
    // Arrange
    component.fx = '1/x';
    component.x0 = 1;
    component.x1 = 4;
    component.seg = 6;
    component.error = 0.001;
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('#calculateSimp'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBeCloseTo(1.386,2);
  });

  it('Should return 16 if f(x)=2x, x0=1 x1=4', ()=>{
    expect(simp.getArea('2x', 0, 4, 4, 0.00001)).toBeCloseTo(16.0,1);
  })

  it('Should return 0.333 if f(x)=x^2, x0=0 x1=1', ()=>{
    expect(simp.getArea("x^2", 0, 1, 4, 0.0001)).toBeCloseTo(0.333,2);
  })

  it('Should return 1.38 in f(x)=1/x, x0=1, x1=4', ()=>{
    expect(simp.getArea("1/x", 1, 4, 6, 0.001)).toBeCloseTo(1.386,2);
  })

});

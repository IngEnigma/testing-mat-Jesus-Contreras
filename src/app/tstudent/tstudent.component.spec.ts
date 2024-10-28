import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TstudentComponent } from './tstudent.component';

describe('TstudentComponent', () => {
  let component: TstudentComponent;
  let fixture: ComponentFixture<TstudentComponent>;
  let tstudent: TstudentComponent;

  beforeEach(() => {
    tstudent = new TstudentComponent();
  })

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

  it('should return the correct t-distribution probability for x=1.1 and dof=9 and should return p=0.35006', () => {
    const result = tstudent.getT(9, 0, 1.1, 10);
    expect(result).toBeCloseTo(0.35006, 5);
  });

  it('should return the correct t-distribution probability for x=1.1812 and dof=10 and should return p=0.36757', () => {
    const result = tstudent.getT(10, 0, 1.1812, 20);
    expect(result).toBeCloseTo(0.36757, 5);
  });

  it('should return the correct t-distribution probability for x=2.750 and dof=30 and should return p=0.49500', () => {
    const result = tstudent.getT(30, 0, 2.75, 10);
    expect(result).toBeCloseTo(0.495, 5);
  });
});

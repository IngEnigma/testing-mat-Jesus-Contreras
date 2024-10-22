import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let stddev: StddevComponent;

  beforeEach(() => {
    stddev = new StddevComponent();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return stddev = 572.03 with test 1', () => {
    const result = stddev.getStddev([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(572.03);
  });

  it('Should return stddev = 62.26 with test 2', () => {
    const result = stddev.getStddev([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(62.26);
  });
});

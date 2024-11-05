import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { By } from '@angular/platform-browser';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

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

  it('Should return stddev = 572.03 with input 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', () => {
    // Arrange
    component.imputString = '160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBe('572.03');
  });

  it('Should return stddev = 62.26 with input 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', () => {
    // Arrange
    component.imputString = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toBe('62.26');
  });

  it('Should return stddev = 572.03 with [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const result = component.getStddev([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(572.03);
  });

  it('Should return stddev = 62.26 with [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getStddev([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(62.26);
  });

  it('Should return de string 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503 in to array', () => {
    const result = component.getArray('160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503');
    expect(result).toEqual([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
  })

  it('Should return de string 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2 in to array', () => {
    const result = component.getArray('15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2');
    expect(result).toEqual([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
  })

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { By } from '@angular/platform-browser';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return media = 550.6 with input 160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503', async () => {
    // Arrange
    component.imputString = '160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toContain('550.6');
  });

  it('Should return media = 60.32 with input 15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', async () => {
    // Arrange
    component.imputString = '15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2';
    fixture.detectChanges();
    // Act
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
    // Assert
    const resultText = fixture.debugElement.query(By.css('p')).nativeElement.textContent;
    expect(resultText).toContain('60.32');
  });

  it('Should return media = 550.6 with [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const result = component.getMedia([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(550.6);
  });

  it('Should return media = 60.32 with [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = component.getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(60.32);
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
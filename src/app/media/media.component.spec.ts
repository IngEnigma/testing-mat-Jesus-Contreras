import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>; 
  let media = new MediaComponent();

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

  it('Should return media = 550.6 with test 1', () => {
    const result = media.getMedia([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(550.6);
  });

  it('Should return media = 60.32 with test 2', () => {
    const result = media.getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(60.32);
  });
});
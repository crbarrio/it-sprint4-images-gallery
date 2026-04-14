import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery-component';
import { Image } from '../../interfaces/image.interface';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  const mockImages: Image[] = [
    {
      id: '237',
      src: 'https://picsum.photos/id/237/600',
      alt: 'Picture of a dog',
    },
    {
      id: '238',
      src: 'https://picsum.photos/id/238/600',
      alt: 'Picture of a landscape',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('images', mockImages);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one gallery item per image', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('app-gallery-item');

    expect(items.length).toBe(mockImages.length);
  });

  it('should update featured image when selecting one item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('app-gallery-item');

    items[1].dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const featuredImage = compiled.querySelector('.flex img');

    expect(component.featuredImage()).toEqual(mockImages[1]);
    expect(featuredImage?.getAttribute('src')).toBe(mockImages[1].src);
    expect(featuredImage?.getAttribute('alt')).toBe(mockImages[1].alt);
  });
});

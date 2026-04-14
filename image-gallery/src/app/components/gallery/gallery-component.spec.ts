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

  it('should pass the input images to PrimeNG galleria', () => {
    expect(component.images()).toEqual(mockImages);
  });

  it('should render the active image with alt text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mainImage = compiled.querySelector('.p-galleria-item img');

    expect(mainImage?.getAttribute('src')).toBe(mockImages[0].src);
    expect(mainImage?.getAttribute('alt')).toBe(mockImages[0].alt);
  });


});

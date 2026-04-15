import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
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
    component.images.set(mockImages);
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

  it('should keep thumbnails in their original order', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const thumbnailImages = Array.from(compiled.querySelectorAll('.gallery-thumbnail app-gallery-item img'));

    expect(thumbnailImages.map((image) => image.getAttribute('src'))).toEqual(
      mockImages.map((image) => image.src),
    );
  });

  it('should render the first image as featured by default', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const featuredImage = compiled.querySelector('.gallery-featured-image');

    expect(component.featuredImage()).toEqual(mockImages[0]);
    expect(featuredImage?.getAttribute('src')).toBe(mockImages[0].src);
    expect(featuredImage?.getAttribute('alt')).toBe(mockImages[0].alt);
  });

  it('should update featured image when selecting one item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.gallery-thumbnail > div');

    items[1].dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const featuredImage = compiled.querySelector('.gallery-featured-image');

    expect(component.featuredImage()).toEqual(mockImages[1]);
    expect(featuredImage?.getAttribute('src')).toBe(mockImages[1].src);
    expect(featuredImage?.getAttribute('alt')).toBe(mockImages[1].alt);
  });

  it('should remove an image from the gallery', () => {
    vi.spyOn(window, 'confirm').mockReturnValue(true);

    component.removeImage(mockImages[0].id);

    expect(component.images()).toEqual([mockImages[1]]);
    expect(component.featuredImage()).toEqual(mockImages[1]);
  });
});

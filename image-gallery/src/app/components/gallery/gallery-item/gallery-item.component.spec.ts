import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryItemComponent } from './gallery-item';
import { Image } from '../../../interfaces/image.interface';

describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;
  const mockImage: Image = {
    id: '237',
    src: 'https://picsum.photos/id/237/600',
    alt: 'Picture of a dog',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('image', mockImage);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the provided image data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const imageElement = compiled.querySelector('img');

    expect(imageElement).toBeTruthy();
    expect(imageElement?.getAttribute('src')).toBe(mockImage.src);
    expect(imageElement?.getAttribute('alt')?.trim()).toBe(mockImage.alt);
  });

  it('should emit the image id when the image is clicked', () => {
    let emittedImageId: string | undefined;
    component.selectImage.subscribe((imageId) => {
      emittedImageId = imageId;
    });

    const compiled = fixture.nativeElement as HTMLElement;
    const imageElement = compiled.querySelector('img');
    imageElement?.click();

    expect(emittedImageId).toBe(mockImage.id);
  });

  

});

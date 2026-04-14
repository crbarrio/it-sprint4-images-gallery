import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import Gallery from './gallery';
import { imagesArray } from './gallery.data';
import { GalleryComponent } from '../../components/gallery/gallery-component';

describe('Gallery page', () => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the page signal with gallery data', () => {
    expect(component.images()).toEqual(imagesArray);
  });

  it('should pass the images to the gallery component', () => {
    const galleryDebugElement = fixture.debugElement.query(By.directive(GalleryComponent));
    const galleryComponent = galleryDebugElement.componentInstance as GalleryComponent;

    expect(galleryComponent.images()).toEqual(imagesArray);
  });
});
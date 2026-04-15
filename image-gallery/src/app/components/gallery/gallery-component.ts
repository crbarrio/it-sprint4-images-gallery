import { Component, computed, signal } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';

import { Image } from "../../interfaces/image.interface";
import { GalleryItemComponent } from "./gallery-item/gallery-item";
import { imagesArray } from "../../pages/gallery/gallery.data";

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
  imports: [GalleryItemComponent, CdkDrag, CdkDropList],
})

export class GalleryComponent {
  images = signal<Image[]>(imagesArray);
  selectedImageId = signal<string | null>(null);

  featuredImage = computed(() => {
    const selectedImageId = this.selectedImageId();
    const images = this.images();

    if (selectedImageId) {
      return images.find((image) => image.id === selectedImageId) ?? images[0];
    }

    return images[0];
  });

  thumbnails = computed(() => this.images());

  setFeaturedImage(image: Image) {
    this.selectedImageId.set(image.id);
  }

  removeImage(imageId: string) {
    if (!confirm('Are you sure you want to delete this image?')) {
      return;
    }

    if (this.selectedImageId() === imageId) {
      this.selectedImageId.set(null);
    }

    this.images.update((images) => images.filter((image) => image.id !== imageId));
  }

  drop(event: CdkDragDrop<Image[]>) {
    if (event.previousIndex === event.currentIndex) {
      return;
    }

    this.images.update((images) => {
      const reorderedImages = [...images];
      moveItemInArray(reorderedImages, event.previousIndex, event.currentIndex);
      return reorderedImages;
    });
  }

}

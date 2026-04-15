import { Component, computed, input, output, signal } from '@angular/core';
import { Image } from "../../interfaces/image.interface";
import { GalleryItemComponent } from "./gallery-item/gallery-item";

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
  imports: [GalleryItemComponent],
})

export class GalleryComponent {

  images = input.required<Image[]>();
  imageRemoved = output<string>();
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
  if (confirm('Are you sure you want to delete this image?')) {
    if (this.selectedImageId() === imageId) {
      this.selectedImageId.set(null);
    }

    this.imageRemoved.emit(imageId);
  }
}

}

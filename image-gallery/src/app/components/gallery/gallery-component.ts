import { Component, input, signal } from '@angular/core';
import { Image } from "../../interfaces/image.interface";
import { GalleryItemComponent } from "./gallery-item/gallery-item";

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
  imports: [GalleryItemComponent],
})
export class GalleryComponent {


  images = input.required<Image[]>();

  featuredImage = signal<Image>({
    id:'',
    src: '',
    alt: ''
  })

  setFeaturedImage(image: Image) {

    this.featuredImage.set(image);
  }

  
  
}

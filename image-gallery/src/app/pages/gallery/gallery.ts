import { Component, signal } from '@angular/core';
import { GalleryComponent } from "../../components/gallery/gallery-component";
import { imagesArray } from "./gallery.data";

@Component({
  imports: [GalleryComponent],
  templateUrl: './gallery.html',
})

export default class Gallery {
  images = signal(imagesArray);
}

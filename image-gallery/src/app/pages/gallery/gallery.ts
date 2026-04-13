import { Component, signal } from '@angular/core';
import { Image } from "../../interfaces/image.interface";
import { GalleryComponent } from "../../components/gallery/gallery-component";

const imagesArray: Image[] = [
  {
    id:'237',
    src: 'https://picsum.photos/id/237/600',
    alt: 'https://picsum.photos/id/237/600'
  },
  {
    id:'238',
    src: 'https://picsum.photos/id/238/600',
    alt: 'https://picsum.photos/id/238/600'
  },
  {
    id:'239',
    src: 'https://picsum.photos/id/239/600',
    alt: 'https://picsum.photos/id/239/600'
  },
  {
    id:'240',
    src: 'https://picsum.photos/id/240/600',
    alt: 'https://picsum.photos/id/240/600'
  },
  {
    id:'241',
    src: 'https://picsum.photos/id/241/600',
    alt: 'https://picsum.photos/id/241/600'
  },
  {
    id:'242',
    src: 'https://picsum.photos/id/242/600',
    alt: 'https://picsum.photos/id/242/600'
  },
  {
    id:'243',
    src: 'https://picsum.photos/id/243/600',
    alt: 'https://picsum.photos/id/243/600'
  },
  {
    id:'244',
    src: 'https://picsum.photos/id/244/600',
    alt: 'https://picsum.photos/id/244/600'
  },

]

@Component({
  imports: [GalleryComponent],
  templateUrl: './gallery.html',
})

export default class Gallery {
  images = signal(imagesArray)
}

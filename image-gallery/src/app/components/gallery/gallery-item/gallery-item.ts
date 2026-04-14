import { Component, input } from '@angular/core';
import { Image } from '../../../interfaces/image.interface';

@Component({
  selector: 'app-gallery-item',
  imports: [],
  templateUrl: './gallery-item.html',
})
export class GalleryItemComponent {
  image = input.required<Image>()
}

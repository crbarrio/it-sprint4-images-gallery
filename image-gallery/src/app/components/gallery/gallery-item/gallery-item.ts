import { Component, input } from '@angular/core';
import { Image } from '../../../interfaces/image.interface';

@Component({
  selector: 'app-gallery-item',
  imports: [],
  templateUrl: './gallery-item.html',
})
export class GalleryItemComponent {

  image = input.required<Image>()

  imageClass = () => {
    return 'h-40 w-full rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:cursor-pointer sm:h-48 lg:h-52';
  };
}

import { Component, input, signal } from '@angular/core';
import { Image } from "../../interfaces/image.interface";

import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery-component.html',
  imports: [GalleriaModule],
})
export class GalleryComponent {
  images = input.required<Image[]>();

  readonly responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

}

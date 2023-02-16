import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @ViewChild('imageDiv') imageDiv!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const timeIntevalSeconds = 3;
    setInterval(()=> {
      // console.log((timeIntevalSeconds * 1000) / 1000);
      this.change(`assets/images/banner-${(timeIntevalSeconds * 1000)/1000}.jpg`)
    }, timeIntevalSeconds * 1000);
  }

  change(src: string) {
    this.imageDiv.nativeElement.src = src;
    this.imageDiv.nativeElement.style.width = '100%';
  }

}

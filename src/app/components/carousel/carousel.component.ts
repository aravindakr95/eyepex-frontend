import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import {CarouselService} from "../../services/carousel.service";

import {Image} from "../../models/image.model";
import {ResourceData} from "../../models/resource-data.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  private carouselSubscription?: Subscription;

  public slidesList: Image[] = [];
  public currentIndex = 0;

  @Input()
  public slides: number = 5;

  @Input()
  public infinite: boolean = true;

  constructor(private carouselService: CarouselService) {}

  public ngOnInit() {
    this.carouselSubscription = this.carouselService.getImages(this.slides)
      .subscribe((images: ResourceData<Image[]>) => {
        this.slidesList = images.slides;
      });
  }

  public plusSlides(count: number) {
    this.currentIndex += count;

    if (this.currentIndex > this.slidesList.length - 1) {
      this.currentIndex = this.infinite ? 0 : this.slidesList.length - 1;
    }

    if (this.currentIndex < 0) {
      this.currentIndex = this.infinite ? this.slidesList.length - 1 : 0;
    }
  }

  public ngOnDestroy() {
    if (this.carouselSubscription) {
      this.carouselSubscription.unsubscribe();
    }
  }
}

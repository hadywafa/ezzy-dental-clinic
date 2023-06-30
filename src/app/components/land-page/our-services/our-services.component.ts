import { DentalService } from "src/app/Core/Models/DentalService";
import { Component, HostListener, OnInit } from "@angular/core";
import { DENTAL_SERVICES } from "src/app/Core/CachedData/OurServicesData";
import { SwiperOptions } from "swiper";
import { TailwindBreakpoints } from "src/app/Core/enums/TailwindBreakpoints";
import { Translations } from "src/app/Core/Services/translationService/Translations.service";
import { ScreenSizeNumber } from "src/app/shared/modules/screen-size";
@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"],
})
export class OurServicesComponent implements OnInit {
  dentalServices: DentalService[] = DENTAL_SERVICES;
  config: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 50,
    allowTouchMove: true,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  @HostListener("window:resize", ["$event"])
  onWindowResize(event: Event) {
    this.updateSwiperConfig();
  }

  /**
   *
   */
  constructor(public appDictionary: Translations) {}
  ngOnInit(): void {
    this.updateSwiperConfig();
  }
  private updateSwiperConfig() {
    const windowWidth = window.innerWidth;
    const { SM, MD, LG, XL } = ScreenSizeNumber;
    const slidesPerView = windowWidth < SM ? 1 : windowWidth < MD ? 2 : windowWidth < LG ? 3 : 4;
    this.config = { ...this.config, slidesPerView };
  }
}

import { DentalService } from "src/app/Core/Models/DentalService";
import { Component, HostListener } from "@angular/core";
import { DENTAL_SERVICES } from "src/app/Core/CachedData/OurServicesData";
import { SwiperOptions } from "swiper";
import { TailwindBreakpoints } from "src/app/Core/enums/TailwindBreakpoints";
@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"],
})
export class OurServicesComponent {
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

  private updateSwiperConfig() {
    const windowWidth = window.innerWidth;
    const { sm, md, lg } = TailwindBreakpoints;
    const slidesPerView = windowWidth < sm ? 1 : windowWidth < md ? 2 : windowWidth < lg ? 3 : 4;
    this.config = { ...this.config, slidesPerView };
  }
}

import { DentalService } from "src/app/Core/Models/DentalService";
import { Component } from "@angular/core";
import { DENTAL_SERVICES as DENTAL_SERVICES } from "src/app/Core/CachedData/OurServicesData";
import { SwiperOptions } from "swiper";
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
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
}

import { Component, Input } from "@angular/core";
import { DentalService } from "src/app/Core/Models/DentalService";
import { Translations } from "src/app/Core/Services/translationService/Translations.service";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.css"],
})
export class ServiceCardComponent {
  @Input() dentalService!: DentalService;
  /**
   *
   */
  constructor(public appDictionary: Translations) {

  }
}

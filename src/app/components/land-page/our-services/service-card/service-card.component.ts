import { Component, Input } from "@angular/core";
import { DentalService } from "src/app/Core/Models/DentalService";

@Component({
  selector: "app-service-card",
  templateUrl: "./service-card.component.html",
  styleUrls: ["./service-card.component.css"],
})
export class ServiceCardComponent {
  @Input() dentalService!: DentalService;
}

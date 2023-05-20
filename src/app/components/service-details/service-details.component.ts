import { DentalService, ParagraphStyle } from "src/app/Core/Models/DentalService";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DENTAL_SERVICES } from "src/app/Core/CachedData/OurServicesData";

@Component({
  selector: "app-service-details",
  templateUrl: "./service-details.component.html",
  styleUrls: ["./service-details.component.css"],
})
export class ServiceDetailsComponent implements OnInit {
  dentalService!: DentalService;
  readonly ParagraphStyle = ParagraphStyle;
  /**
   *
   */
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.activeRoute.snapshot.params["id"];
    if (!id) throw new Error("Method not implemented.");
    const result = DENTAL_SERVICES.filter((x) => x.id == id).at(0);
    if (result) {
      this.dentalService = result;
    }
  }
}

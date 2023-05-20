import { Component } from "@angular/core";
import { Translations } from "src/app/Core/Services/translationService/Translations.service";

@Component({
  selector: "app-medical-tourism",
  templateUrl: "./medical-tourism.component.html",
  styleUrls: ["./medical-tourism.component.css"],
})
export class MedicalTourismComponent {
  constructor(public appDictionary: Translations) {}
}

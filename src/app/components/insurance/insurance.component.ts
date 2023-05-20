import { Component } from "@angular/core";
import { Translations } from "src/app/Core/Services/translationService/Translations.service";

@Component({
  selector: "app-insurance",
  templateUrl: "./insurance.component.html",
  styleUrls: ["./insurance.component.css"],
})
export class InsuranceComponent {
  constructor(public appDictionary: Translations) {}
}

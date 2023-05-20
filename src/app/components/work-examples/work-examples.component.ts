import { Translations } from "./../../Core/Services/translationService/Translations.service";
import { Component, Input, OnInit } from "@angular/core";
import { DENTAL_CASES } from "src/app/Core/CachedData/OurExamplesData";
import { DentalCase } from "src/app/Core/Models/DentalCase";

@Component({
  selector: "app-work-examples",
  templateUrl: "./work-examples.component.html",
  styleUrls: ["./work-examples.component.css"],
})
export class WorkExamplesComponent {
  dentalCases: DentalCase[] = DENTAL_CASES;
  /**
   *
   */
  constructor(public appDictionary: Translations) {}
}

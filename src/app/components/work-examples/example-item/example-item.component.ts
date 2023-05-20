import { Component, Input, OnInit } from "@angular/core";
import { DentalCase } from "src/app/Core/Models/DentalCase";

@Component({
  selector: "app-example-item",
  templateUrl: "./example-item.component.html",
  styleUrls: ["./example-item.component.css"],
})
export class ExampleItemComponent {
  @Input() dentalCase!: DentalCase;
}

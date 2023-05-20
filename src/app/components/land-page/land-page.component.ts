import { Component, OnInit, ViewChild } from "@angular/core";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { HeaderComponent } from "../header/header.component";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: "app-land-page",
  templateUrl: "./land-page.component.html",
  styleUrls: ["./land-page.component.css"],
})
export class LandPageComponent implements OnInit {
  constructor() {
    console.log("landing-page");
  }

  ngOnInit() {
    console.log("land-page");
  }
}

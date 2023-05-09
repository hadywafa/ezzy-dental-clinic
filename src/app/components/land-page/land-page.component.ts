import { Component, OnInit } from "@angular/core";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: "app-land-page",
  templateUrl: "./land-page.component.html",
  styleUrls: ["./land-page.component.css"],
})
export class LandPageComponent implements OnInit {
  rangeValue = 50;
  constructor() {
    console.log("landing-page");
  }

  ngOnInit() {
    window.onscroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll("nav a");

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document.querySelector(`nav a[href*=${id}]`)?.classList.add("active");
          });
        }
      });
    };
  }
  handleRangeChange(event: any) {
    this.rangeValue = event.target.value;
  }
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log("slide change");
  }
}

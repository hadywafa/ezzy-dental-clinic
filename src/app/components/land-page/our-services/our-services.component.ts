import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-services",
  templateUrl: "./our-services.component.html",
  styleUrls: ["./our-services.component.css"],
})
export class OurServicesComponent implements OnInit {
  rangeValue = 50;
  constructor() {
    console.log("landing-page");
  }

  activeSection: string = "";
  serviceCards: any[] = [
    { id: "service-card-1", active: true },
    { id: "service-card-2", active: true },
    { id: "service-card-3", active: true },
    { id: "service-card-4", active: true },
    { id: "service-card-5", active: true },
    { id: "service-card-6", active: true },
    { id: "service-card-7", active: true },
    // Add more objects for additional service cards if needed
  ];

  ngOnInit() {
    window.addEventListener("scroll", this.onWindowScroll);
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.onWindowScroll);
  }
  onWindowScroll = () => {
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
        this.activeSection = id ?? "";
        this.updateServiceCardStates();
      }
    });
  };
  updateServiceCardStates() {
    this.serviceCards.forEach((card) => {
      card.active = card.id === this.activeSection;
    });
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

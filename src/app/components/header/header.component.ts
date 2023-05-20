import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  navigateToOurServices(): void {
    const element = document.getElementById("our-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  // isMenuOpen = false;
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;

  // }
}

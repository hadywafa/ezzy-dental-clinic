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
  /**
   *
   */
  constructor(private router: Router) {}
  navigateToAnchorTag(stateName: string): void {
    this.router.navigateByUrl(stateName).then(() => {
      const element = document.getElementById(stateName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

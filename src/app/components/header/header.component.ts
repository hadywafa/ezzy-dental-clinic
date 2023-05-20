import { GlobalsService } from "./../../shared/services/globals.service";
import { Translations } from "./../../Core/Services/translationService/Translations.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  mobileMenuOpen: boolean = false;
  activeElement: string = ""; // Track the active element
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  /**
   *
   */
  constructor(private router: Router, private global: GlobalsService, public appDictionary: Translations) {}

  navigateToAnchorTag(stateName: string): void {
    this.activeElement = stateName; // Set the active element on click
    const newUrl = `/${this.global.lang}`;
    this.router.navigateByUrl(newUrl).then(() => {
      const element = document.getElementById(stateName);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
  resetActiveLink() {
    this.activeElement = "";
  }
  selectLanguage(lang: string) {
    const currentPage = this.router.url.replace("en/", "#").replace("gr/", "#").replace("rs/", "#").split("#")[1];
    let newUrl = `/${lang}`;
    if (currentPage) newUrl = `/${lang}/${currentPage}`;
    this.router
      .navigateByUrl(newUrl)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  }
}

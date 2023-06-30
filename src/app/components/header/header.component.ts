import { takeUntil } from "rxjs";
import { ScreenSize } from "./../../shared/modules/screen-size";
import { GlobalsService } from "./../../shared/services/globals.service";
import { Translations } from "./../../Core/Services/translationService/Translations.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaseComponent } from "src/app/shared/components/base.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent extends BaseComponent implements OnInit {
  readonly SCREEN_SIZE = ScreenSize;
  mobileMenuOpen: boolean = false;
  activeElement: string = ""; // Track the active element
  currentScreenSize!: ScreenSize; // Track the active element
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  /**
   *
   */
  constructor(private router: Router, private global: GlobalsService, public appDictionary: Translations) {
    super();
  }
  ngOnInit(): void {
    this.global.screenSize.pipe(takeUntil(this.destroyed$)).subscribe((result) => {
      console.log(result);

      this.currentScreenSize = result;
    });
  }

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

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}

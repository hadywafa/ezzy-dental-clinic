import { GlobalsService } from "./../../shared/services/globals.service";
import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, map, of, takeUntil } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Title } from "@angular/platform-browser";
import { AppLanguages } from "../enums/AppLanguages";

@Injectable({
  providedIn: "root",
})
export class AppInitializationGuard implements CanActivate {
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private titleService: Title,
    private global: GlobalsService
  ) {
    this.translateService.setDefaultLang(AppLanguages.English);
  }

  canActivate(
    next: ActivatedRouteSnapshot
    // state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const lang = next.paramMap.get("lang");
    if (!lang || this.isLangValid(lang)) {
      // Redirect to a default language page or handle the invalid language scenario appropriately
      return this.router.createUrlTree(["/", "en"]);
    } else {
      this.translateService.use(lang!);
      this.titleService.setTitle("Ezzy Dental Care");
      this.global.Initialize(lang!);
      return of(true);
    }
  }
  isLangValid(lang: string | null): boolean {
    return !(lang === AppLanguages.English || lang === AppLanguages.Germany || lang === AppLanguages.Russian);
  }
}

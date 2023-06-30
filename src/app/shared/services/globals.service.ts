import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ScreenSize } from "../modules/screen-size";

@Injectable({
  providedIn: "root",
})
export class GlobalsService {
  private screenSize$!: Observable<ScreenSize>;

  constructor() {}

  get screenSize(): Observable<ScreenSize> {
    return this.screenSize$;
  }

  lang!: string;
  Initialize(lang: string): void {
    this.lang = lang;
    this.screenSize$ = new Observable<ScreenSize>((observer) => {
      const mediaQueryList = window.matchMedia(`(max-width: ${ScreenSize.SM})`);
      const listener = () => {
        if (mediaQueryList.matches) {
          observer.next(ScreenSize.SM);
        } else if (window.matchMedia(`(max-width: ${ScreenSize.MD})`).matches) {
          observer.next(ScreenSize.MD);
        } else if (window.matchMedia(`(max-width: ${ScreenSize.LG})`).matches) {
          observer.next(ScreenSize.LG);
        } else {
          observer.next(ScreenSize.XL);
        }
      };
      listener();
      mediaQueryList.addEventListener("change", listener);

      return () => mediaQueryList.removeEventListener("change", listener);
    });
  }
}

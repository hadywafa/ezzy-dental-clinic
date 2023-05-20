import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { InsuranceComponent } from "./components/insurance/insurance.component";
import { MedicalTourismComponent } from "./components/medical-tourism/medical-tourism.component";
import { WorkExamplesComponent } from "./components/work-examples/work-examples.component";
import { OurServicesComponent } from "./components/land-page/our-services/our-services.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandPageComponent } from "./components/land-page/land-page.component";
import { SwiperModule } from "swiper/angular";
import { HeaderComponent } from "./components/header/header.component";
import { ServiceCardComponent } from "./components/land-page/our-services/service-card/service-card.component";
import { CommonModule } from "@angular/common";
import { ServiceDetailsComponent } from "./components/service-details/service-details.component";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { Translations } from "./Core/Services/translationService/Translations.service";
import { AppCommonModule } from "./shared/modules/app-common.module";
import { from, pluck } from "rxjs";
import { MaterialModule } from "./shared/modules/material.module";
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ExampleItemComponent } from "./components/work-examples/example-item/example-item.component";
import { FooterComponent } from "./Core/footer/footer.component";
export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return from(import(`../assets/i18n/${lang}`)).pipe(pluck("default"));
  }
}
@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    OurServicesComponent,
    WorkExamplesComponent,
    MedicalTourismComponent,
    InsuranceComponent,
    ContactUsComponent,
    ServiceCardComponent,
    ServiceDetailsComponent,
    AboutUsComponent,
    ExampleItemComponent,
    FooterComponent,
  ],

  imports: [
    AppCommonModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    CommonModule,
    NgxPageScrollModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader,
      },
    }),
  ],
  providers: [Translations],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

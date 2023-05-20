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
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandPageComponent,
    OurServicesComponent,
    WorkExamplesComponent,
    MedicalTourismComponent,
    InsuranceComponent,
    ContactUsComponent,
    ServiceCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

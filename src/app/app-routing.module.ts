import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { InsuranceComponent } from "./components/insurance/insurance.component";
import { MedicalTourismComponent } from "./components/medical-tourism/medical-tourism.component";
import { WorkExamplesComponent } from "./components/work-examples/work-examples.component";
import { OurServicesComponent } from "./components/land-page/our-services/our-services.component";
import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandPageComponent } from "./components/land-page/land-page.component";
import { ServiceDetailsComponent } from "./components/service-details/service-details.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";

const routes: Routes = [
  { path: "", component: LandPageComponent },
  { path: "home", component: LandPageComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "our-services/:id", component: ServiceDetailsComponent },
  { path: "work-examples", component: WorkExamplesComponent },
  // { path: "Guidance", component: LandPageComponent },
  { path: "medical-tourism", component: MedicalTourismComponent },
  { path: "insurance", component: InsuranceComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "**", component: LandPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

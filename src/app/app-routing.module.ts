import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandPageComponent } from "./components/land-page/land-page.component";

const routes: Routes = [
  { path: "", component: LandPageComponent },
  { path: "**", component: LandPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

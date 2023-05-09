import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandPageComponent } from "./components/land-page/land-page.component";
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from "./components/header/header.component";
@NgModule({
  declarations: [AppComponent,HeaderComponent, LandPageComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

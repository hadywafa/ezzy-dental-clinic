import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { LoaderComponent } from "../components/loader/loader.component";

@NgModule({
  declarations: [PageNotFoundComponent, LoaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PageNotFoundComponent, LoaderComponent],
})
export class AppCommonModule {}

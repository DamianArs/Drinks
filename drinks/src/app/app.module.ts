import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateDrinkComponent } from "./create-drink/create-drink.component";
import { ShowDrinksComponent } from "./show-drinks/show-drinks.component";
import { SearchDrinkComponent } from "./search-drink/search-drink.component";
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateDrinkComponent,
    ShowDrinksComponent,
    SearchDrinkComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

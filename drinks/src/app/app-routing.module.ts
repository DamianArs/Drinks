import { ShowDrinksComponent } from "./show-drinks/show-drinks.component";
import { CreateDrinkComponent } from "./create-drink/create-drink.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "create/:id",
    component: ShowDrinksComponent
  },
  {
    path: "create",
    component: CreateDrinkComponent
  },

  {
    path: "",
    redirectTo: "/create",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Drink } from "./../model";
import { DrinkServiceService } from "./../drink-service.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-show-drinks",
  templateUrl: "./show-drinks.component.html",
  styleUrls: ["./show-drinks.component.css"]
})
export class ShowDrinksComponent implements OnInit {
  drink: Drink;
  alcohol = ["Wódka", "Rum", "Gin", "Whiskey", "Tequila", "Brandy"];
  constructor(
    private http: DrinkServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.loadCar();
  }
  loadCar() {
    const id = +this.route.snapshot.params["id"];
    this.http.getDrink(id).subscribe(drink => {
      this.drink = drink;
    });
  }
  onSubmit() {
    const newDrink: Drink = {
      name: this.drink.name,
      alcohol: this.drink.alcohol,
      ice: this.drink.ice,
      juice: this.drink.juice,
      additives: this.drink.additives,
      mark: this.drink.mark
    };
    this.http.updateDrink(this.drink.id, newDrink).subscribe(() => {
      this.router.navigate(["/create"]);
    });
  }
}

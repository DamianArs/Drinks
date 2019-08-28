import { Drink } from "./../model";
import { DrinkServiceService } from "./../drink-service.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-drink",
  templateUrl: "./create-drink.component.html",
  styleUrls: ["./create-drink.component.css"]
})
export class CreateDrinkComponent implements OnInit {
  drinksArray = [];
  @ViewChild("ref")
  el: NgForm;
  drink = new Formularz();
  alcohol = ["Wódka", "Rum", "Gin", "Whiskey", "Tequila", "Brandy"];
  constructor(private http: DrinkServiceService) {}

  ngOnInit() {
    this.getDrink();
  }
  onSubmit() {
    const newDrink: Drink = {
      name: this.drink.name.toLowerCase(),
      alcohol: this.drink.alcohol,
      ice: this.drink.ice,
      juice: this.drink.juice,
      additives: this.drink.additives,
      mark: this.drink.mark
    };
    this.http.createDrink(newDrink).subscribe(() => {
      this.getDrink();
      this.el.reset();
    });
  }
  getDrink() {
    this.http.getDrinks().subscribe(data => {
      this.drinksArray = data;
    });
  }
  remove(drink, event) {
    event.stopPropagation();
    this.http.deleteDrink(drink.id).subscribe(() => {
      this.getDrink();
    });
  }
  updateList(searchValue = {}) {
    this.http.searchtDrinks(searchValue).then(res => (this.drinksArray = res));
  }

  onDrinkSearch(searchValue: any) {
    this.updateList(searchValue);
  }
}
class Formularz {
  constructor(
    public name?: string,
    public alcohol?: string,
    public ice?: boolean,
    public juice?: string,
    public additives?: string,
    public mark?: number
  ) {}
}

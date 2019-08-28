import { Sort, Order } from "./../model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-search-drink",
  templateUrl: "./search-drink.component.html",
  styleUrls: ["./search-drink.component.css"]
})
export class SearchDrinkComponent implements OnInit {
  @Output() drinkSearch: EventEmitter<string> = new EventEmitter();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  sortBy: { label: string; value: Sort }[] = [
    { label: "wg nazwy", value: Sort.Name },
    { label: "wg alkoholu", value: Sort.Alcohol },
    { label: "wg oceny", value: Sort.Mark }
  ];

  orderBy: { label: string; value: Order }[] = [
    { label: "rosnąco", value: Order.Asc },
    { label: "malejąco", value: Order.Desc }
  ];

  ngOnInit() {
    this.searchForm = this.fb.group({
      query: "".toUpperCase(),
      sort: Sort.Name,
      order: Order.Asc
    });

    this.drinkSearch.emit(this.searchForm.value);
  }

  search() {
    this.drinkSearch.emit(this.searchForm.value);
  }
}

import { Drink } from "./model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DrinkServiceService {
  readonly server: string = "http://localhost:3000/drinks";
  constructor(private http: HttpClient) {}

  createDrink(drink: Drink): Observable<Drink> {
    return this.http.post<Drink>(this.server, drink);
  }
  getDrinks(): Observable<Array<Drink>> {
    return this.http.get<Array<Drink>>(this.server);
  }
  deleteDrink(id: number): Observable<Drink> {
    return this.http.delete<Drink>(this.server + "/" + id);
  }
  getDrink(id: number): Observable<Drink> {
    return this.http.get<Drink>(this.server + "/" + id);
  }
  updateDrink(id: number, data): Observable<Drink> {
    return this.http.put<Drink>(this.server + "/" + id, data);
  }
  searchtDrinks(searchValue: any): any {
    const { query, sort, order } = searchValue;
    const url = `${this.server}?q=${query}&_sort=${sort}&_order=${order}`;
    return this.http.get(url).toPromise();
  }
}

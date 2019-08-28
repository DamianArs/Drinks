export class Drink {
  id?: number;
  name: string;
  alcohol: any;
  ice: boolean;
  juice?: string;
  additives?: string;
  mark?: number;
}
export enum Sort {
  Name = "name",
  Alcohol = "alcohol",
  Mark = "mark"
}

export enum Order {
  Asc = "asc",
  Desc = "desc"
}

import {Identifier} from "./identifier";

export class Color extends Identifier {
  private _description: string;
  private _price: number;

  constructor() {
    super();
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

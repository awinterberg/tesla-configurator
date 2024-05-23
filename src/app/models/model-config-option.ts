export class ModelConfigOption {
  private _id: number;
  private _description: string;
  private _range: number;
  private _speed: number;
  private _price: number;

  constructor() {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get range(): number {
    return this._range;
  }

  set range(value: number) {
    this._range = value;
  }

  get speed(): number {
    return this._speed;
  }

  set speed(value: number) {
    this._speed = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

import {Color} from "./color";
import {Identifier} from "./identifier";

export class Model extends Identifier {
  private _description: string;
  private _colors: Color[];

  constructor() {
    super();
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get colors(): Color[] {
    return this._colors;
  }

  set colors(value: Color[]) {
    this._colors = value;
  }
}

export class Step {
  private _label: string;
  private _path: string;

  constructor(label: string, path: string) {
    this._label = label;
    this._path = path;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }
}

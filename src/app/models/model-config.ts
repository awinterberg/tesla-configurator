import {ModelConfigOption} from "./model-config-option";

export class ModelConfig {
  private _configs: ModelConfigOption[];
  private _towHitch: boolean;
  private _yoke: boolean;

  constructor() {
  }

  get configs(): ModelConfigOption[] {
    return this._configs;
  }

  set configs(value: ModelConfigOption[]) {
    this._configs = value;
  }

  get towHitch(): boolean {
    return this._towHitch;
  }

  set towHitch(value: boolean) {
    this._towHitch = value;
  }

  get yoke(): boolean {
    return this._yoke;
  }

  set yoke(value: boolean) {
    this._yoke = value;
  }
}

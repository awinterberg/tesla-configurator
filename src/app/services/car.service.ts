import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Model} from "../models/model";
import {ModelConfig} from "../models/model-config";
import {Color} from "../models/color";
import {ModelConfigOption} from "../models/model-config-option";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private colorSubject = new BehaviorSubject<Color | undefined>(undefined);
  private modelSubject = new BehaviorSubject<Model | undefined>(undefined);
  private configSubject = new BehaviorSubject<ModelConfig | undefined>(undefined);
  private configOptionSubject = new BehaviorSubject<ModelConfigOption | undefined>(undefined);
  private towHitchCheckedSubject = new BehaviorSubject<boolean | undefined>(undefined);
  private yokeCheckedSubject = new BehaviorSubject<boolean | undefined>(undefined);

  static readonly MODEL_TEMPLATE_URL = "/models";
  static readonly MODEL_CONFIG_TEMPLATE_URL = "/options/:id";

  constructor(public http: HttpClient) {
  }

  getAllModels$(): Observable<Model[]> {
    return this.http.get<Model[]>(CarService.MODEL_TEMPLATE_URL);
  };

  getModelConfigForModelCodes$(modelCode: string | undefined): Observable<ModelConfig | undefined> {
    return modelCode
      ? this.http.get<ModelConfig>(CarService.MODEL_CONFIG_TEMPLATE_URL.replace(':id', modelCode))
      : of(undefined);
  }

  setColor(color: Color | undefined) {
    this.colorSubject.next(color);
    this.setConfig(undefined);
  }

  getColor$() {
    return this.colorSubject.asObservable();
  }

  getColor() {
    return this.colorSubject.getValue();
  }

  setModel(model: Model | undefined) {
    this.modelSubject.next(model);
    this.setColor(undefined);
  }

  getModel$() {
    return this.modelSubject.asObservable();
  }

  getModel() {
    return this.modelSubject.getValue();
  }

  setConfig(config: ModelConfig | undefined) {
    this.configSubject.next(config);
    this.setConfigOption(undefined);
    this.setYokeChecked(false);
    this.setTowHitchChecked(false);
  }

  setConfigOption(configOption: ModelConfigOption | undefined) {
    this.configOptionSubject.next(configOption);
  }

  getConfigOption() {
    return this.configOptionSubject.getValue();
  }

  getConfigOption$() {
    return this.configOptionSubject.asObservable();
  }

  getTowHitchChecked() {
    return this.towHitchCheckedSubject.getValue();
  }

  getTowHitchChecked$() {
    return this.towHitchCheckedSubject.asObservable();
  }

  setTowHitchChecked(checked: boolean) {
    this.towHitchCheckedSubject.next(checked);
  }

  getYokeChecked() {
    return this.yokeCheckedSubject.getValue();
  }

  getYokeChecked$() {
    return this.yokeCheckedSubject.asObservable();
  }

  setYokeChecked(checked: boolean) {
    this.yokeCheckedSubject.next(checked);
  }
}

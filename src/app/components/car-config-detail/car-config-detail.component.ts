import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ModelConfig} from "../../models/model-config";
import {CarService} from "../../services/car.service";
import {ModelConfigOption} from "../../models/model-config-option";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {CheckboxComponent} from "../util/checkbox/checkbox.component";
import {MilesPipe} from "../../pipes/miles.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'tesla-car-config-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    CheckboxComponent,
    CurrencyPipe,
    MilesPipe,
    FormsModule
  ],
  templateUrl: './car-config-detail.component.html',
  styleUrl: './car-config-detail.component.scss'
})
export class CarConfigDetailComponent implements OnInit, OnDestroy {
  private getModelConfigForModelCodeSubscription: Subscription | undefined;

  config: ModelConfig | undefined;
  configOptions: ModelConfigOption[] = [];
  selectedConfigOption: ModelConfigOption | undefined;
  isTowHitchChecked: boolean = false
  isYokeChecked: boolean = false;

  constructor(public carService: CarService) {
  }

  ngOnInit(): void {
    this.getModelConfigForModelCodeSubscription = this.carService.getModelConfigForModelCodes$(this.carService.getModel()?.code).subscribe(config => {
      if (config) {
        this.config = config;
        this.configOptions = config.configs;
        this.isTowHitchChecked = !!this.carService.getTowHitchChecked();
        this.isYokeChecked = !!this.carService.getYokeChecked();
        this.selectedConfigOption = this.carService.getConfigOption();
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  onConfigOptionSelected(event: Event) {
    const target: HTMLSelectElement = event.target as HTMLSelectElement;

    this.selectedConfigOption = this.configOptions.find((configOption) => configOption.description === target.value);
    this.carService.setConfigOption(this.selectedConfigOption);
  }

  onTowHitchChange(checked: boolean) {
    this.carService.setTowHitchChecked(checked);
  }

  onYokeChange(checked: boolean) {
    this.carService.setYokeChecked(checked);
  }

  private unsubscribeAll() {
    if (this.getModelConfigForModelCodeSubscription && !this.getModelConfigForModelCodeSubscription.closed) {
      this.getModelConfigForModelCodeSubscription.unsubscribe();
    }
  }
}

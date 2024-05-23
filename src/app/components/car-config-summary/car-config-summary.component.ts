import {Component, OnDestroy, OnInit} from '@angular/core';
import {MilesPipe} from "../../pipes/miles.pipe";
import {CarService} from "../../services/car.service";
import {AsyncPipe, CurrencyPipe} from "@angular/common";
import {ModelConfigOption} from "../../models/model-config-option";
import {Color} from "../../models/color";
import {combineLatest, Subscription} from "rxjs";

@Component({
  selector: 'tesla-car-config-summary',
  standalone: true,
  imports: [
    MilesPipe,
    AsyncPipe,
    CurrencyPipe
  ],
  templateUrl: './car-config-summary.component.html',
  styleUrl: './car-config-summary.component.scss'
})
export class CarConfigSummaryComponent implements OnInit, OnDestroy {
  readonly CHECKBOX_PRICES: number = 1000;

  subscription: Subscription | undefined;

  configOption: ModelConfigOption | undefined;
  color: Color | undefined;
  towHitchChecked: boolean | undefined;
  yokeChecked: boolean | undefined;
  totalCost: number = 0;

  constructor(public carService: CarService) {
  }

  updateTotalCost() {
    let sum: number = 0;
    sum += this.configOption ? this.configOption.price : 0;
    sum += this.color ? this.color.price : 0;
    sum += this.towHitchChecked ? this.CHECKBOX_PRICES : 0;
    sum += this.yokeChecked ? this.CHECKBOX_PRICES : 0;
    this.totalCost = sum;
  }

  ngOnInit(): void {
    this.subscription = combineLatest([
        this.carService.getConfigOption$(),
        this.carService.getColor$(),
        this.carService.getTowHitchChecked$(),
        this.carService.getYokeChecked$()
      ]).subscribe(([configOption, color, towHitchChecked, yokeChecked]) => {
      this.configOption = configOption;
      this.color = color;
      this.towHitchChecked = towHitchChecked;
      this.yokeChecked = yokeChecked;
      this.updateTotalCost()
    })
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {Model} from "../../models/model";
import {Subscription} from "rxjs";
import {Color} from "../../models/color";
import {AsyncPipe, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'tesla-car-config',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './car-config.component.html',
  styleUrl: './car-config.component.scss'
})
export class CarConfigComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  models: Model[] = [];
  colors: Color[] = [];

  selectedModel: Model | undefined;
  selectedColor: Color | undefined;

  constructor(public carService: CarService) {
  }

  ngOnInit(): void {
    this.subscription = this.carService.getAllModels$().subscribe(models => {
      this.models = models;
      if (this.carService.getModel()) {
        this.selectedModel = this.carService.getModel();
        if (this.selectedModel) {
          this.colors = this.selectedModel.colors;
          if (this.carService.getColor()) {
            this.selectedColor = this.carService.getColor();
          }
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  onModelSelected(event: Event): void {
    const target: HTMLSelectElement = event.target as HTMLSelectElement;

    this.selectedModel = this.models.find((model) => model.description === target.value);

    if (this.selectedModel) {
      this.colors = this.selectedModel.colors;
    }
    this.selectedColor = undefined;

    this.carService.setModel(this.selectedModel);
    this.carService.setColor(undefined);
  }

  onColorSelected(event: Event): void {
    const target: HTMLSelectElement = event.target as HTMLSelectElement;

    this.selectedColor = this.colors.find((color) => color.description === target.value);
    this.carService.setColor(this.selectedColor);
  }

  private unsubscribeAll() {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}

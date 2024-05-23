import {Component, Input} from '@angular/core';
import {Step} from "../../models/step";
import {RouterLink} from "@angular/router";
import {CarService} from "../../services/car.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'tesla-step-selector',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './step-selector.component.html',
  styleUrl: './step-selector.component.scss'
})
export class StepSelectorComponent {

  @Input()
  public steps: Step[] | undefined;

  constructor(public carService: CarService) {
  }
}

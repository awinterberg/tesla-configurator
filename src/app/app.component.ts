import {Component} from '@angular/core';
import {Step} from "./models/step";
import {AppModule} from "./modules/app/app.module";
import {CarService} from "./services/car.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'tesla-root',
  standalone: true,
  imports: [AppModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'tesla-configurator'
  name: string = 'Angular';
  steps: Step[] = [
    new Step('Step 1', '/step1'),
    new Step('Step 2', '/step2'),
    new Step('Step 3', '/step3')
  ];


  constructor(public carService: CarService) {
  }
}

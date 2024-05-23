import {NgModule} from '@angular/core';
import {AsyncPipe, CommonModule, JsonPipe} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {StepSelectorComponent} from "../../components/step-selector/step-selector.component";
import {RouterOutlet} from "@angular/router";
import {CarService} from "../../services/car.service";


@NgModule({
  declarations: [

  ],
  imports: [
    AsyncPipe,
    JsonPipe,
    StepSelectorComponent,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    RouterOutlet,
    StepSelectorComponent
  ],
  providers: [
    HttpClientModule,
    CarService
  ]
})
export class AppModule { }

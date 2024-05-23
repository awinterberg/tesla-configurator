import { Routes } from '@angular/router';
import {CarConfigComponent} from "./components/car-config/car-config.component";
import {CarConfigDetailComponent} from "./components/car-config-detail/car-config-detail.component";
import {CarConfigSummaryComponent} from "./components/car-config-summary/car-config-summary.component";

export const routes: Routes = [
  { path: 'step1', component: CarConfigComponent },
  { path: 'step2', component: CarConfigDetailComponent },
  { path: 'step3', component: CarConfigSummaryComponent }
];

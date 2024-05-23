import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigDetailComponent } from './car-config-detail.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CarConfigDetailComponent', () => {
  let component: CarConfigDetailComponent;
  let fixture: ComponentFixture<CarConfigDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarConfigDetailComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarConfigDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

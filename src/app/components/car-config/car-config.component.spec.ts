import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigComponent } from './car-config.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CarConfigComponent', () => {
  let component: CarConfigComponent;
  let fixture: ComponentFixture<CarConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarConfigComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

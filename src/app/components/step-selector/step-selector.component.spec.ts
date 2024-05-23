import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StepSelectorComponent} from './step-selector.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('StepSelectorComponent', () => {
  let component: StepSelectorComponent;
  let fixture: ComponentFixture<StepSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSelectorComponent, HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StepSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

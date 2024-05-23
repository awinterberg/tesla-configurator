import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarConfigSummaryComponent } from './car-config-summary.component';

describe('CarConfigSummaryComponent', () => {
  let component: CarConfigSummaryComponent;
  let fixture: ComponentFixture<CarConfigSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarConfigSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarConfigSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

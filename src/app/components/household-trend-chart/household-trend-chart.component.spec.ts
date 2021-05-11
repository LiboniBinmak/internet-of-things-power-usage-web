import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdTrendChartComponent } from './household-trend-chart.component';

describe('HouseholdTrendChartComponent', () => {
  let component: HouseholdTrendChartComponent;
  let fixture: ComponentFixture<HouseholdTrendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdTrendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

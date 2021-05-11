import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTotalPowerChartComponent } from './live-total-power-chart.component';

describe('LiveTotalPowerChartComponent', () => {
  let component: LiveTotalPowerChartComponent;
  let fixture: ComponentFixture<LiveTotalPowerChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTotalPowerChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTotalPowerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

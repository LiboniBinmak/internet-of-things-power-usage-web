import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveApplianceChartComponent } from './live-appliance-chart.component';

describe('LiveApplianceChartComponent', () => {
  let component: LiveApplianceChartComponent;
  let fixture: ComponentFixture<LiveApplianceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveApplianceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveApplianceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseHoldUserComponent } from './house-hold-user.component';

describe('HouseHoldUserComponent', () => {
  let component: HouseHoldUserComponent;
  let fixture: ComponentFixture<HouseHoldUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseHoldUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseHoldUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

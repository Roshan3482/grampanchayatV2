import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRatecardComponent } from './property-ratecard.component';

describe('PropertyRatecardComponent', () => {
  let component: PropertyRatecardComponent;
  let fixture: ComponentFixture<PropertyRatecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyRatecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyRatecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

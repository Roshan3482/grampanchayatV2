import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrampanchayatDetailComponent } from './grampanchayat-detail.component';

describe('GrampanchayatDetailComponent', () => {
  let component: GrampanchayatDetailComponent;
  let fixture: ComponentFixture<GrampanchayatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrampanchayatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrampanchayatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

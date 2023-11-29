import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCardComponent } from './cars-card.component';

describe('CarsCardComponent', () => {
  let component: CarsCardComponent;
  let fixture: ComponentFixture<CarsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarsCardComponent]
    });
    fixture = TestBed.createComponent(CarsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsCadeteComponent } from './travels-cadete.component';

describe('TravelsCadeteComponent', () => {
  let component: TravelsCadeteComponent;
  let fixture: ComponentFixture<TravelsCadeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsCadeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsCadeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

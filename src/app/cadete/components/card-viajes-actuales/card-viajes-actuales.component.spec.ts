import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViajesActualesComponent } from './card-viajes-actuales.component';

describe('CardViajesActualesComponent', () => {
  let component: CardViajesActualesComponent;
  let fixture: ComponentFixture<CardViajesActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViajesActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViajesActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

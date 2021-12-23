import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesActualesComponent } from './viajes-actuales.component';

describe('ViajesActualesComponent', () => {
  let component: ViajesActualesComponent;
  let fixture: ComponentFixture<ViajesActualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViajesActualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesActualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

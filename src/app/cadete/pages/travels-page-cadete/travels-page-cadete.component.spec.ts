import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsPageCadeteComponent } from './travels-page-cadete.component';

describe('TravelsPageCadeteComponent', () => {
  let component: TravelsPageCadeteComponent;
  let fixture: ComponentFixture<TravelsPageCadeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsPageCadeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsPageCadeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

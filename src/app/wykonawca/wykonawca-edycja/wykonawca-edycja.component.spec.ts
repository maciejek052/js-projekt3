import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonawcaEdycjaComponent } from './wykonawca-edycja.component';

describe('WykonawcaEdycjaComponent', () => {
  let component: WykonawcaEdycjaComponent;
  let fixture: ComponentFixture<WykonawcaEdycjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonawcaEdycjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonawcaEdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

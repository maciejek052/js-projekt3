import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonawcaPrzegladComponent } from './wykonawca-przeglad.component';

describe('WykonawcaPrzegladComponent', () => {
  let component: WykonawcaPrzegladComponent;
  let fixture: ComponentFixture<WykonawcaPrzegladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonawcaPrzegladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonawcaPrzegladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

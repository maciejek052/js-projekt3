import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonawcaPrzegladBezUsuwaniaComponent } from './wykonawca-przeglad-bez-usuwania.component';

describe('WykonawcaPrzegladBezUsuwaniaComponent', () => {
  let component: WykonawcaPrzegladBezUsuwaniaComponent;
  let fixture: ComponentFixture<WykonawcaPrzegladBezUsuwaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonawcaPrzegladBezUsuwaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonawcaPrzegladBezUsuwaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

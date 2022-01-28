import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatunekPrzegladComponent } from './gatunek-przeglad.component';

describe('GatunekPrzegladComponent', () => {
  let component: GatunekPrzegladComponent;
  let fixture: ComponentFixture<GatunekPrzegladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatunekPrzegladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatunekPrzegladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

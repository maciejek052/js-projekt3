import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatunekDaneComponent } from './gatunek-dane.component';

describe('GatunekDaneComponent', () => {
  let component: GatunekDaneComponent;
  let fixture: ComponentFixture<GatunekDaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatunekDaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatunekDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

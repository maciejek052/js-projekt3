import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatunekPojedynczyComponent } from './gatunek-pojedynczy.component';

describe('GatunekPojedynczyComponent', () => {
  let component: GatunekPojedynczyComponent;
  let fixture: ComponentFixture<GatunekPojedynczyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatunekPojedynczyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatunekPojedynczyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

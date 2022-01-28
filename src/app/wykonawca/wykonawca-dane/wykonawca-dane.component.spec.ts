import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonawcaDaneComponent } from './wykonawca-dane.component';

describe('WykonawcaDaneComponent', () => {
  let component: WykonawcaDaneComponent;
  let fixture: ComponentFixture<WykonawcaDaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonawcaDaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonawcaDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

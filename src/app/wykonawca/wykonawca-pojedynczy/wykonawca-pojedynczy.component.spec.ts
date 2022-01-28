import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonawcaPojedynczyComponent } from './wykonawca-pojedynczy.component';

describe('WykonawcaPojedynczyComponent', () => {
  let component: WykonawcaPojedynczyComponent;
  let fixture: ComponentFixture<WykonawcaPojedynczyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonawcaPojedynczyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonawcaPojedynczyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

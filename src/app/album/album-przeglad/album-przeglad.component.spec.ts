import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPrzegladComponent } from './album-przeglad.component';

describe('AlbumPrzegladComponent', () => {
  let component: AlbumPrzegladComponent;
  let fixture: ComponentFixture<AlbumPrzegladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPrzegladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPrzegladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

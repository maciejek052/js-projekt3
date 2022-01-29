import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPrzegladBezUsuwaniaComponent } from './album-przeglad-bez-usuwania.component';

describe('AlbumPrzegladBezUsuwaniaComponent', () => {
  let component: AlbumPrzegladBezUsuwaniaComponent;
  let fixture: ComponentFixture<AlbumPrzegladBezUsuwaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPrzegladBezUsuwaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPrzegladBezUsuwaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumEdycjaComponent } from './album-edycja.component';

describe('AlbumEdycjaComponent', () => {
  let component: AlbumEdycjaComponent;
  let fixture: ComponentFixture<AlbumEdycjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumEdycjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumEdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

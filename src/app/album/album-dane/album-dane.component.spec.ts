import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDaneComponent } from './album-dane.component';

describe('AlbumDaneComponent', () => {
  let component: AlbumDaneComponent;
  let fixture: ComponentFixture<AlbumDaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

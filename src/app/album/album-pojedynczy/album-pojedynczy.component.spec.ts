import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPojedynczyComponent } from './album-pojedynczy.component';

describe('AlbumPojedynczyComponent', () => {
  let component: AlbumPojedynczyComponent;
  let fixture: ComponentFixture<AlbumPojedynczyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPojedynczyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPojedynczyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

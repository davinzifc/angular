import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSongComponent } from './box-song.component';

describe('BoxSongComponent', () => {
  let component: BoxSongComponent;
  let fixture: ComponentFixture<BoxSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

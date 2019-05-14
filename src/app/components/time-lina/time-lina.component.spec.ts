import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLinaComponent } from './time-lina.component';

describe('TimeLinaComponent', () => {
  let component: TimeLinaComponent;
  let fixture: ComponentFixture<TimeLinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopartistaComponent } from './topartista.component';

describe('TopartistaComponent', () => {
  let component: TopartistaComponent;
  let fixture: ComponentFixture<TopartistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopartistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopartistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

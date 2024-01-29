import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBodyComponent } from './display-body.component';

describe('DisplayBodyComponent', () => {
  let component: DisplayBodyComponent;
  let fixture: ComponentFixture<DisplayBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBodyComponent]
    });
    fixture = TestBed.createComponent(DisplayBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexComponentsComponent } from './complex-components.component';

describe('ComplexComponentsComponent', () => {
  let component: ComplexComponentsComponent;
  let fixture: ComponentFixture<ComplexComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

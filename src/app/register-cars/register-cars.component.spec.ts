import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarsComponent } from './register-cars.component';

describe('RegisterCarsComponent', () => {
  let component: RegisterCarsComponent;
  let fixture: ComponentFixture<RegisterCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaskComponent } from './nuevask.component';

describe('NuevaskComponent', () => {
  let component: NuevaskComponent;
  let fixture: ComponentFixture<NuevaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

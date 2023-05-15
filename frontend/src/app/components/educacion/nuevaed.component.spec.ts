import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaedComponent } from './nuevaed.component';

describe('NuevaedComponent', () => {
  let component: NuevaedComponent;
  let fixture: ComponentFixture<NuevaedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

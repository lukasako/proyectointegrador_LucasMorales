import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaxpComponent } from './nuevaxp.component';

describe('NuevaxpComponent', () => {
  let component: NuevaxpComponent;
  let fixture: ComponentFixture<NuevaxpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaxpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaxpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

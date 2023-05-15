import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditskComponent } from './editsk.component';

describe('EditskComponent', () => {
  let component: EditskComponent;
  let fixture: ComponentFixture<EditskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

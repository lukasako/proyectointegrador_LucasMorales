import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditXpComponent } from './edit-xp.component';

describe('EditXpComponent', () => {
  let component: EditXpComponent;
  let fixture: ComponentFixture<EditXpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditXpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditXpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

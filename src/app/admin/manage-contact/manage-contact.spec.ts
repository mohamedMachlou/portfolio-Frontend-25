import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContact } from './manage-contact';

describe('ManageContact', () => {
  let component: ManageContact;
  let fixture: ComponentFixture<ManageContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

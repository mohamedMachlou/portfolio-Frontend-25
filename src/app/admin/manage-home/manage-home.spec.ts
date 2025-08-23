import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHome } from './manage-home';

describe('ManageHome', () => {
  let component: ManageHome;
  let fixture: ComponentFixture<ManageHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

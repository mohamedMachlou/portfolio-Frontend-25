import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMyService } from './manage-my-service';

describe('ManageMyService', () => {
  let component: ManageMyService;
  let fixture: ComponentFixture<ManageMyService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMyService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

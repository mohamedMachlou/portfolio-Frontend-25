import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTechnology } from './manage-technology';

describe('ManageTechnology', () => {
  let component: ManageTechnology;
  let fixture: ComponentFixture<ManageTechnology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageTechnology]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTechnology);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCertificate } from './manage-certificate';

describe('ManageCertificate', () => {
  let component: ManageCertificate;
  let fixture: ComponentFixture<ManageCertificate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCertificate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCertificate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

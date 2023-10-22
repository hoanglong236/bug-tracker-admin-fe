import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedLayoutComponent } from './verified-layout.component';

describe('VerifiedLayoutComponent', () => {
  let component: VerifiedLayoutComponent;
  let fixture: ComponentFixture<VerifiedLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifiedLayoutComponent]
    });
    fixture = TestBed.createComponent(VerifiedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

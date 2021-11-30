import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureheaderComponent } from './secureheader.component';

describe('SecureheaderComponent', () => {
  let component: SecureheaderComponent;
  let fixture: ComponentFixture<SecureheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

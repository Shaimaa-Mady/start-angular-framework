import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyRightComponent } from './copy-right.component';

describe('CopyRightComponent', () => {
  let component: CopyRightComponent;
  let fixture: ComponentFixture<CopyRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopyRightComponent]
    });
    fixture = TestBed.createComponent(CopyRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

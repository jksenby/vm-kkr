import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmPageComponent } from './vm-page.component';

describe('VmPageComponent', () => {
  let component: VmPageComponent;
  let fixture: ComponentFixture<VmPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

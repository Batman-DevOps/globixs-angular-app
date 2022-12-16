import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHiredFormComponent } from './get-hired-form.component';

describe('GetHiredFormComponent', () => {
  let component: GetHiredFormComponent;
  let fixture: ComponentFixture<GetHiredFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHiredFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHiredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

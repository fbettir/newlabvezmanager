import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyCourseComponent } from './copy-course.component';

describe('CopyCourseComponent', () => {
  let component: CopyCourseComponent;
  let fixture: ComponentFixture<CopyCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFilterFormComponent } from './projects-filter-form.component';

describe('ProjectsFilterFormComponent', () => {
  let component: ProjectsFilterFormComponent;
  let fixture: ComponentFixture<ProjectsFilterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsFilterFormComponent]
    });
    fixture = TestBed.createComponent(ProjectsFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

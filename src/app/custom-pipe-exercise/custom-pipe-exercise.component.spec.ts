import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeExerciseComponent } from './custom-pipe-exercise.component';

describe('CustomPipeExerciseComponent', () => {
  let component: CustomPipeExerciseComponent;
  let fixture: ComponentFixture<CustomPipeExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipeExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

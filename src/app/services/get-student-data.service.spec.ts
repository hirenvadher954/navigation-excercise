import { TestBed } from '@angular/core/testing';

import { GetStudentDataService } from './get-student-data.service';

describe('GetStudentDataService', () => {
  let service: GetStudentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStudentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

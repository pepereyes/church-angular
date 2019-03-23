import { TestBed } from '@angular/core/testing';

import { MiembroServiceService } from './miembro-service.service';

describe('MiembroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiembroServiceService = TestBed.get(MiembroServiceService);
    expect(service).toBeTruthy();
  });
});

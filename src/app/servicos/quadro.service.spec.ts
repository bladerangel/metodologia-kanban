import { TestBed, inject } from '@angular/core/testing';

import { QuadroService } from './quadro.service';

describe('QuadroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuadroService]
    });
  });

  it('should be created', inject([QuadroService], (service: QuadroService) => {
    expect(service).toBeTruthy();
  }));
});

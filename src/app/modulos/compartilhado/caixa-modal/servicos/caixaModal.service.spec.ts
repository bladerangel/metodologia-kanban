import { TestBed, inject } from '@angular/core/testing';

import { CaixaModalService } from './caixaModal.service';

describe('CaixaModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaixaModalService]
    });
  });

  it('should be created', inject([CaixaModalService], (service: CaixaModalService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CaixaToastService } from './caixaToast.service';

describe('CaixaToastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaixaToastService]
    });
  });

  it('should be created', inject([CaixaToastService], (service: CaixaToastService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ConfirmacaoModalService } from './confirmacao-modal.service';

describe('ConfirmacaoModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmacaoModalService]
    });
  });

  it('should be created', inject([ConfirmacaoModalService], (service: ConfirmacaoModalService) => {
    expect(service).toBeTruthy();
  }));
});

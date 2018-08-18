import { TestBed, inject } from '@angular/core/testing';

import { AtividadeService } from './atividade.service';

describe('AtividadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtividadeService]
    });
  });

  it('should be created', inject([AtividadeService], (service: AtividadeService) => {
    expect(service).toBeTruthy();
  }));
});

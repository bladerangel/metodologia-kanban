import { SobreModule } from './sobre.module';

describe('SobreModule', () => {
  let sobreModule: SobreModule;

  beforeEach(() => {
    sobreModule = new SobreModule();
  });

  it('should create an instance', () => {
    expect(sobreModule).toBeTruthy();
  });
});

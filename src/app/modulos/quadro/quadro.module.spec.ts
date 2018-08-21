import { QuadroModule } from './quadro.module';

describe('QuadroModule', () => {
  let quadroModule: QuadroModule;

  beforeEach(() => {
    quadroModule = new QuadroModule();
  });

  it('should create an instance', () => {
    expect(quadroModule).toBeTruthy();
  });
});

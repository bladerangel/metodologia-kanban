import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroDetalheComponent } from './quadro-detalhe.component';

describe('QuadroDetalheComponent', () => {
  let component: QuadroDetalheComponent;
  let fixture: ComponentFixture<QuadroDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

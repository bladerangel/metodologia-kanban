import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaToastComponent } from './caixa-toast.component';

describe('CaixaToastComponent', () => {
  let component: CaixaToastComponent;
  let fixture: ComponentFixture<CaixaToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

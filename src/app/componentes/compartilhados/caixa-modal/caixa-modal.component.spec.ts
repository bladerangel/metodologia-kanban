import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaModalComponent } from './caixa-modal.component';

describe('CaixaModalComponent', () => {
  let component: CaixaModalComponent;
  let fixture: ComponentFixture<CaixaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

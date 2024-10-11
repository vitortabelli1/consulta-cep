import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepConsultaComponent } from './cep-consulta.component';

describe('CepConsultaComponent', () => {
  let component: CepConsultaComponent;
  let fixture: ComponentFixture<CepConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CepConsultaComponent]
    });
    fixture = TestBed.createComponent(CepConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteExistenciaComponent } from './reporte-cliente-existencia.component';

describe('ReporteClienteExistenciaComponent', () => {
  let component: ReporteClienteExistenciaComponent;
  let fixture: ComponentFixture<ReporteClienteExistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteExistenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

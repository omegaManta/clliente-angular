import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteMovimientoComponent } from './reporte-cliente-movimiento.component';

describe('ReporteClienteMovimientoComponent', () => {
  let component: ReporteClienteMovimientoComponent;
  let fixture: ComponentFixture<ReporteClienteMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteMovimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

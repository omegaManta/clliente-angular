import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteKardexProveedorComponent } from './reporte-cliente-kardex-proveedor.component';

describe('ReporteClienteKardexProveedorComponent', () => {
  let component: ReporteClienteKardexProveedorComponent;
  let fixture: ComponentFixture<ReporteClienteKardexProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteKardexProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteKardexProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

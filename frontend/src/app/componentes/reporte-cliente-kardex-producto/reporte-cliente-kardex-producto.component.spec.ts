import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteKardexProductoComponent } from './reporte-cliente-kardex-producto.component';

describe('ReporteClienteKardexProductoComponent', () => {
  let component: ReporteClienteKardexProductoComponent;
  let fixture: ComponentFixture<ReporteClienteKardexProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteKardexProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteKardexProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

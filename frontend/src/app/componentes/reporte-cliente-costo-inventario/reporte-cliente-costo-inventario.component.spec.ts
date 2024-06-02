import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteCostoInventarioComponent } from './reporte-cliente-costo-inventario.component';

describe('ReporteClienteCostoInventarioComponent', () => {
  let component: ReporteClienteCostoInventarioComponent;
  let fixture: ComponentFixture<ReporteClienteCostoInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteCostoInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteCostoInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteKardexClienteComponent } from './reporte-cliente-kardex-cliente.component';

describe('ReporteClienteKardexClienteComponent', () => {
  let component: ReporteClienteKardexClienteComponent;
  let fixture: ComponentFixture<ReporteClienteKardexClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteKardexClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteKardexClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

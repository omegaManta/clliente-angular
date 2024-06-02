import { TestBed } from '@angular/core/testing';

import { ReporteClienteService } from './reporte-cliente.service';

describe('ReporteClienteService', () => {
  let service: ReporteClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

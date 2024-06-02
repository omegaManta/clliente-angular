import { TestBed } from '@angular/core/testing';

import { ServicioTecnicoService } from './servicio-tecnico.service';

describe('ServicioTecnicoService', () => {
  let service: ServicioTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

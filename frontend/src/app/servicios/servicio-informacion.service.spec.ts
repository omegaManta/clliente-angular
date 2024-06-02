import { TestBed } from '@angular/core/testing';

import { ServicioInformacionService } from './servicio-informacion.service';

describe('ServicioInformacionService', () => {
  let service: ServicioInformacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioInformacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

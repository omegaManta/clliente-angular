import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosRealizadosClienteComponent } from './servicios-realizados-cliente.component';

describe('ServiciosRealizadosClienteComponent', () => {
  let component: ServiciosRealizadosClienteComponent;
  let fixture: ComponentFixture<ServiciosRealizadosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosRealizadosClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosRealizadosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

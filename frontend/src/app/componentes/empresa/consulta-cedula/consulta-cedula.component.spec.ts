import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCedulaComponent } from './consulta-cedula.component';

describe('ConsultaCedulaComponent', () => {
  let component: ConsultaCedulaComponent;
  let fixture: ComponentFixture<ConsultaCedulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCedulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCedulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
